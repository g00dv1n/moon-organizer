<template>
    <div id="main-container">
        <div class="month-container">
            <div class="glyphicon glyphicon-arrow-left month-changer" @click="prev()"></div>
            <div class="month text-capitalize">{{ month.monthName }} {{month.year}}</div>
            <div class="glyphicon glyphicon-arrow-right month-changer" @click="next()"></div>
        </div>

        <div class="weekdays-container text-capitalize">
            <div class="weekday" v-for="w in month.getWeekDays()">
                {{w}}
            </div>
        </div>

        <div id="calendar-container" ref="container">
            <div :class="['cell', {today:c.isToday}]" v-for="c in month.getMonthData()" :style="c.style">
                <div class="date">{{c.day}}</div>
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
        transition: all 0.3s ease-in 0.0s;
    }

    .cell:hover {
        transform: scale(1.2);
        z-index: 99;
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

    .today {
        outline: solid 3px red !important;
    }


</style>
