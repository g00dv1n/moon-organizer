<template>
    <div>
        <h3 class="profile__input" v-if="title">{{title}}</h3>
        <div class="dtm-container">
            <el-select class="dtm-container__year" v-model="year" :placeholder="constants.year">
                <el-option
                        v-for="y in years"
                        :key="y"
                        :label="y"
                        :value="y">
                </el-option>
            </el-select>
            <el-select class="dtm-container__month" v-model="month" :placeholder="constants.month">
                <el-option
                        v-for="m in months"

                        :label="m.number"
                        :value="m.number">
                </el-option>
            </el-select>
            <el-select class="dtm-container__day" v-model="day" :placeholder="constants.day">
                <el-option
                        v-for="d in days"
                        :key="d"
                        :label="d"
                        :value="d">
                </el-option>
            </el-select>
        </div>
        <div class="time-container">
            <el-time-select
                    v-model="time"
                    :picker-options="{start: '00:00', step: '00:01', end: '23:59'}"
                    :placeholder="constants.time">
            </el-time-select>
        </div>
    </div>
</template>

<script>
  import script from './picker.script'
  export default script
</script>

<style lang="css">
    .dtm-container > * {
        display: inline-block;
        width: 100%;
        margin: 0 !important;
        padding: 0 !important;
        box-sizing: border-box;
    }

    .time-container {
        margin-top: 15px;
    }

    .dtm-container__day {
        width: 30%;
    }

    .dtm-container__month {
        width: 30%;
    }

    .dtm-container__year {
        width: 37%;
    }


</style>
