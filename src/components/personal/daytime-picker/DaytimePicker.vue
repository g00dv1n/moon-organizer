<template>
    <div>
        <h3 class="profile__input" v-if="title">{{title}}</h3>
        <div class="dtm-container">
            <el-tooltip effect="dark" :content="constants.year" placement="top">
                <el-select class="dtm-container__year" v-model="year" :placeholder="constants.year">
                    <el-option
                            v-for="y in years"
                            :key="y"
                            :label="y"
                            :value="y">
                    </el-option>
                </el-select>
            </el-tooltip>
            <el-tooltip effect="dark" :content="constants.month" placement="top">
                <el-select class="dtm-container__month" v-model="month" :placeholder="constants.month">
                    <el-option
                            v-for="m in months"
                            :label="m.number"
                            :value="m.number">
                    </el-option>

                </el-select>
            </el-tooltip>
            <el-tooltip effect="dark" :content="constants.day" placement="top">
                <el-select class="dtm-container__day" v-model="day" :placeholder="constants.day">
                    <el-option
                            v-for="d in days"
                            :key="d"
                            :label="d"
                            :value="d">
                    </el-option>
                </el-select>
            </el-tooltip>
        </div>
        <div class="time-container">
            <el-tooltip effect="dark" :content="constants.time" placement="top">
                <el-time-select
                        v-model="time"
                        :picker-options="{start: '00:00', step: '00:15', end: '23:59'}"
                        :placeholder="constants.time"
                        :editable="false">
                </el-time-select>
            </el-tooltip>
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
