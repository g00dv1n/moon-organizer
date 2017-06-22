<template>
    <div class="birthday raw">
        <moon-card class="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1"
                   :title="constants.lunarBirthday">
            <div class="birthday__content">
                <div class="birthday__icon">
                    <img src="../../../assets/birthday-cake.png">
                </div>

                <div class="birthday__description">{{constants.lunarBirthdayDescription}}</div>
                <div class="birthday__title">{{subtitle}}</div>
                <div class="birthday__info">
                    <div v-for="m in mainDayContent">
                        <b>{{constants[m.name] | capitalize}}: </b> {{m.text}}
                    </div>
                </div>
                <div class="birthday__info">
                    <div v-for="l in lunarBirthdayContent" v-html="l"></div>
                </div>
            </div>
        </moon-card>
    </div>
</template>

<script>
  import script from './lunar-birthday.script'
  export default script
</script>

<style lang="css" scoped>
    .birthday {
        margin-top: 50px;
        margin-bottom: 50px;
        font-size: 16px;
    }
    .birthday__description {
        font-style: italic;
    }
    .birthday__content {
        padding: 0 10px;
    }

    .birthday__title {
        font-weight: bold;
        font-size: 20px;
        margin: 25px 0;
    }

    .birthday__icon {
        width: 100%;
        text-align: center;
        margin-bottom: 25px;
    }
    .birthday__icon img {
        width: 100px;
    }

    .birthday__info {
        text-align: left;
        margin-top: 10px;
        margin-bottom: 25px;
    }

    .birthday__info > * {
        margin-top: 10px;
    }


</style>
