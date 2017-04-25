<template>
    <div id="main-container" v-if="month">
        <div class="month-container">
            <div class="glyphicon glyphicon-arrow-left month-changer" @click="prev()"></div>
            <div class="month text-capitalize">{{ month.monthName }} {{month.year}}</div>
            <div class="glyphicon glyphicon-arrow-right month-changer" @click="next()"></div>
        </div>

        <div class="weekdays-container text-capitalize">
            <div class="weekday" v-for="w in month.weekDays">
                {{w}}
            </div>
        </div>

        <div id="calendar-container" ref="container">
            <div :class="['cell',{colored: isColoredHandler(d)}, {today:d.isToday}]" v-for="d in month.days" :style="d.style"
                 @click="onDayClick(d)">
                <div class="date">{{d.day}}</div>
                <div class="lunar-date">{{d.showedLunarDay.number}}</div>
                <div class="moon-phase">
                    <img :src="d.moonPhaseLogoPath">
                </div>
                <md-tooltip md-delay="100" md-direction="top" ref="tooltip" class="tooltip" v-if="d.isToday && notFirstTime !=='yes'">
                    <div>{{constants.clickToMe}}</div>
                </md-tooltip>
            </div>
        </div>
    </div>
</template>

<script>
  import script from './calendar.script'
  export default script
</script>

<style lang="css" scoped>

    #calendar-container {
        position: relative;
        width: 100%;
        height: 80%;
        margin-left: 4px;

    }
    .tooltip {
        font-size: 14px;
    }


    @media (max-width: 719px) {
        .tooltip {
            font-size: 14px;
            width: 100px;
            height: 70px;
            word-break: normal;
            white-space: normal;
            padding: 0;
            margin: 0;
            line-height: 1.2;
            text-align: center;
        }
    }

    .month-container {
        width: 100%;
        margin-bottom: 1%;
        height: 10%;
        overflow: hidden;
    }

    .month-changer {
        width: 10%;
        height: 100%;
        float: left;
        font-size: 30px;
        padding-top: 2%;
        cursor: pointer;
    }

    .weekdays-container {
        width: 100%;
        height: 8%;
        overflow: hidden;
    }

    .weekday {
        width: 14%;
        height: 100%;
        margin: 0;
        padding: 0;
        text-align: center;
        font-size: 20px;
        float: left;
        font-weight: 600;
    }

    #main-container {
        position: relative;
        width: 100%;
        height: 100%;
    }

    .month {
        width: 80%;
        text-align: center;
        padding: 0;
        height: 100%;
        font-size: 34px;
        float: left;
    }

    .cell {
        outline: solid 1px gray;
        position: absolute;
        width: 13%;
        height: 15%;
        margin: 0;
        padding: 0;
        background-color: white;
        transition: all 0.3s ease-in;
        cursor: pointer;
        z-index: 2;
    }

    .cell:hover {
        transform: scale(1.2);
        z-index: 3;
    }

    .cell > * {
        position: absolute;
    }

    .date {
        font-size: 20px;
        position: absolute;
        right: 5%;
        bottom: 0;
        padding: 0;
        margin: 0;
    }

    .lunar-date {
        font-size: 15px;
        position: absolute;
        left: 5%;
        top: 0;
        padding: 0;
        margin: 0;
        color: indigo;
    }

    .moon-phase {
        height: 20px;
        width: 20px;
        position: absolute;
        right: 5%;
        top: 3%;
        padding: 0;
        margin: 0;
    }

    .today {
        outline: solid 3px deeppink !important;
    }

    .colored {
        background-color: rgba(174,213,129,1);
    }


</style>
