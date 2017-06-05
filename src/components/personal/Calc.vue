<template>
    <div class="calendar-container">
        <div class="day-info col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
            <div class="color-block">
                <div class="day-title">Калькулятор лунных дней</div>
            </div>
            <div class="content">
                <div class="content__logo visible-md-block visible-lg-block">
                    <img src="../../assets/calc.png">
                </div>
                <div class="content__text">Выберете дату, чтобы рассчитать лунный день:</div>
                <div class="content__datetime">
                    <daytime-picker v-model="day"></daytime-picker>
                </div>
                <div class="content__text">Выберете город:</div>
                <div class="content__city">
                    <el-select
                            v-model="selectCity"
                            filterable
                            remote
                            placeholder="Начните писать название города"
                            :remote-method="loadCities"
                            :loading="loading">
                        <el-option
                                v-for="city in cities"
                                :key="city.defaultName"
                                :label="city[locale]"
                                :value="city[locale]">
                        </el-option>
                    </el-select>
                </div>
                <div class="content__btn">
                    <md-button class="md-raised md-primary">Расcчитать</md-button>
                    <div class="info">* После нажатия на эту кнопку Вы перейдете на страницу лунного дня</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import script from './calc.script'
  export default script
</script>

<style lang="css" scoped>
    .calendar-container {
        margin-top: 50px;

    }
    .content {
        margin-top: 50px;
        margin-bottom: 25px;
        text-align: left;
        position: relative;
    }

    .content__logo {
        width: 150px;
        position: absolute;
        right: 20px;
        top: 70px
    }

    .content .content__text {
        font-size: 18px;
        font-weight: 400;
        margin-bottom: 25px;
    }

    .content .content__datetime {
        max-width: 300px;
        width: 100%;
        margin-bottom: 25px;
    }

    .content .content__city {
        max-width: 300px !important;
    }

    .content .content__btn {
        width: 100%;
        text-align: center;
        margin-top: 25px;
    }

    .content__btn .info {
        font-style: italic;
        font-size: 14px;
        margin-top: 5px;
    }

</style>
