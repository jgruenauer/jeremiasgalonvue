<template>
    <div class="timer-wi">
        <div>
            <span class="timer-span">Time Without incident:</span>
            <Icon class="info-icon" icon="fluent:info-16-filled" @mouseover="mouseOverIcon" @click="$emit('go-section', 'sectTimer')"/>
        </div>
        <span class="timer-display">{{ formattedTime }}</span>
    </div>
</template>
  
<script>
import { Icon } from '@iconify/vue';
import { doc, getDoc } from "firebase/firestore"
import db from './../../../firebase/init.js'

export default {
    data() {

        return {
            name: "TimerWI",
            startTime: null,
            currentTime: null,
            intervalId: null
        };
    },
    computed: {
        formattedTime() {
            if (!this.startTime) {
                return '00:00:00:00';
            }

            const elapsedSeconds = Math.floor((this.currentTime - this.startTime) / 1000);
            const days = Math.floor(elapsedSeconds / 3600 / 24);
            const hours = Math.floor((elapsedSeconds / 3600) % 24);
            const minutes = Math.floor((elapsedSeconds % 3600) / 60);
            const seconds = Math.floor(elapsedSeconds % 60);

            return `${this.padNumber(days)}:${this.padNumber(hours)}:${this.padNumber(minutes)}:${this.padNumber(seconds)}`;
        }
    },
    methods: {
        padNumber(number) {
            return String(number).padStart(2, '0');
        },
        startTimerWI() {
            if (!this.startTime) {
                this.startTime = new Date().getTime();
            }
            
            this.currentTime = this.startTime;
            this.intervalId = setInterval(() => {
                this.currentTime = new Date().getTime();
            }, 1000);
        },
        stopTimerWI() {
            clearInterval(this.intervalId);
        },
        mouseOverIcon(){
            console.log("works");
        },
        async getTimeOI(){
            const docSnap = await getDoc(doc(db, 'Timer', 'values'));

            if (docSnap.exists()){
                var timerDate = docSnap.data().timerDate          
                this.startTime = new Date(timerDate.year, timerDate.monthValue-1, timerDate.dayOfMonth, timerDate.hour, timerDate.minute, timerDate.second);
            }else{
                console.log('Timer value does not exist!');
            }
        }
    },
    created() {
        this.getTimeOI();
    },
    mounted() {
        this.startTimerWI();
    },
    beforeUnmount() {
        this.stopTimerWI();
    },
    components: {
        Icon,
    },
};
</script>
  
<style>
.timer-span{
    font-size: 20px;
    color: white;
}

.timer-wi {
    position: relative;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.timer-display {
    font-size: 80px;
    color: white;
}

.info-icon{
    position: absolute;
    color: white;
    cursor: pointer;
}
</style>