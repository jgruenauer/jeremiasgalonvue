<template>
    <p class="section-paragraph">
        Du fragst dich was der Timer ganz oben zu bedeuten hat?<br>
        Naja, das soll mich motivieren die Challenges die ich mir setze auch wirklich durchzuziehen.
        Sei dies auf Netflix zu verzichten, ein Projekt zu beenden oder auch ein "Sober October".
    </p>
    <p class="timer-subtitle timer-name-title">Derzeitige Challenge:</p>
    <p class="timer-name">{{ name }}</p>
    <p><span class='underlined'>{{ description }}</span></p>
    <p>
        <span class="timer-subtitle">Start: </span>
        <span>{{ formattedStart }}</span>
    </p>
    <p>
        <span class="timer-subtitle">Ende: </span>
        <span>{{ formattedEnd }}</span>
    </p>
</template>

<script>
import { doc, getDoc } from "firebase/firestore"
import db from './../../../firebase/init.js'

export default {
  name: "TimerSection",
  data() {
    return{
        startTime: null,
        endTime: null,
        name: "",
        description: ""
    };
  },
  components: { },
  computed: {
        formattedStart() {
            if (!this.startTime) {
                return '- empty -';
            }

            return `${this.startTime.getFullYear()}/${this.padNumber(this.startTime.getMonth()+1)}/${this.padNumber(this.startTime.getDate())}`;
        },
        formattedEnd() {
            if (!this.endTime) {
                return '- empty -';
            }

            return `${this.endTime.getFullYear()}/${this.padNumber(this.endTime.getMonth()+1)}/${this.padNumber(this.endTime.getDate())}`;
        }
    },
  methods: {
    async getTimeOI(){
            const docSnap = await getDoc(doc(db, 'Timer', 'values'));

            if (docSnap.exists()){
                var startDate = docSnap.data().startDate          
                this.startTime = new Date(startDate.year, startDate.monthValue-1, startDate.dayOfMonth, startDate.hour, startDate.minute, startDate.second);
                
                var endDate = docSnap.data().endDate          
                this.endTime = new Date(endDate.year, endDate.monthValue-1, endDate.dayOfMonth, endDate.hour, endDate.minute, endDate.second);
           
                this.name = docSnap.data().name
                this.description = docSnap.data().description
            }else{
                console.log('Timer value does not exist!');
            }
        },
        padNumber(number) {
            return String(number).padStart(2, '0');
        }
  },
  created(){
    this.getTimeOI();
  }
}
</script>

<style>
.timer-subtitle{
    font-family: "Oswald";
}

.timer-name-title{
    margin: 15px 0px 5px 0px;
}

.timer-name{
    margin-top: 0px;
}

.underlined{
    color: black;
    position: relative;
  white-space: nowrap;
  &:after {
    --deco-height: 5px;
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: calc(var(--deco-height) * -0.625);
    height: var(--deco-height);
    background-image: url("data:image/svg+xml,%3Csvg width='100' height='64' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23a)'%3E%3Cpath d='M-17 30.5C-1 22 72-4 54 13 37.9 28.2-2.5 57.5 16 55.5s72-29 104-40' stroke='%2300FDCF' stroke-width='10'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='a'%3E%3Cpath fill='%23fff' d='M0 0h100v64H0z'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A");
    background-size: auto 100%;
    background-repeat: round;
    background-position: 0em;
  }
}
</style>