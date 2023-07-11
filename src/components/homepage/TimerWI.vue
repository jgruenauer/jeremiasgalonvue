<template>
    <div class="timer-wi">
        <div>
            <span>Time Without incident:</span>
            <Icon class="info-icon" icon="fluent:info-16-filled" @mouseover="mouseOverIcon"/>
        </div>
        <span class="timer-display">{{ formattedTime }}</span>
    </div>
</template>
  
<script>
import { Icon } from '@iconify/vue';

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
                return '00:00:00';
            }

            const elapsedSeconds = Math.floor((this.currentTime - this.startTime) / 1000);
            const hours = Math.floor(elapsedSeconds / 3600);
            const minutes = Math.floor((elapsedSeconds % 3600) / 60);
            const seconds = Math.floor(elapsedSeconds % 60);

            return `${this.padNumber(hours)}:${this.padNumber(minutes)}:${this.padNumber(seconds)}`;
        }
    },
    methods: {
        padNumber(number) {
            return String(number).padStart(2, '0');
        },
        startTimerWI() {
            this.startTime = new Date().getTime();
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
        }
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
.timer-wi {
    position: relative;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

span {
    color: white;
    font-size: 20px;
}

.timer-display {
    font-size: 80px;
}

.info-icon{
    position: absolute;
    color: white;
}
</style>