<template>
    <div>
        <span>Time Without incident:</span>
        <span class="timer-display">{{ formattedTime }}</span>
    </div>
</template>
  
<script>
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
        }
    },
    mounted() {
        this.startTimerWI();
    },
    beforeUnmount() {
        this.stopTimerWI();
    }
};
</script>
  
<style>
    span{
        color: white;
        margin: 0px 20px;
    }

    .timer-display{
       font-size: 30px; 
    }
</style>