<template>
    <div class="container-fluid" v-if="dayContent">
        <div class="up-button no-select" @click="goTop()" v-if="isEnableGoTop"><i class="material-icons">expand_less</i></div>
        <div class="row">
            <div class="day-info col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1">
                <div class="color-block">
                    <div class="day-title">{{title | capitalize}}</div>
                </div>
                <div class="category-content main">

                    <div class="dynamic-info" v-if="day">
                        <div>
                            <b>{{constants.start | capitalize}}: </b>
                            {{lunarDay.start}}
                        </div>
                        <div>
                            <b>{{constants.end | capitalize}}: </b>
                            {{lunarDay.end}}
                        </div>
                        <div class="dynamic-icons-block">
                            <div><img :src="day.moonPhaseLogoPath"></div>
                            <div>{{constants[day.moonPhase] | capitalize}}</div>
                            <div><img :src="day.zodiacLogoPath"></div>
                            <div>{{constants[day.zodiac] | capitalize}}</div>
                        </div>
                    </div>
                    <div v-for="m in main"><b>{{constants[m.name] | capitalize}}: </b> {{m.text}}</div>
                    <social-sharing :url="sharingUrl" :media="mainLogo" :title="title" inline-template>
                        <div class="social-sharing">
                            <network network="facebook">
                                <i class="fa fa-facebook fa-lg"></i>
                            </network>
                            <network network="googleplus">
                                <i class="fa fa-google-plus fa-lg"></i>
                            </network>
                            <network network="twitter">
                                <i class="fa fa-twitter fa-lg"></i>
                            </network>
                            <network network="vk">
                                <i class="fa fa-vk fa-lg"></i>
                            </network>
                        </div>
                    </social-sharing>
                </div>
            </div>
        </div>
        <div class="row day-raw">
            <div class="day-category col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10  col-xs-offset-1"
                 v-if="lunarBirthday">
                <div class="img-container">
                    <img src="../assets/birthday-cake.png">
                </div>
                <div class="color-block">
                    <div class="category-name">{{constants.lunarBirthday}}</div>
                </div>
                <div class="category-content">
                    <div v-for="p in lunarBirthday" v-html="p[locale]">
                    </div>
                </div>
            </div>
            <div class="day-category col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10  col-xs-offset-1"
            v-if="tasks">
                <div class="img-container">
                    <img src="../assets/tasks.png">
                </div>
                <div class="color-block">
                    <div class="category-name">{{constants.todoPlanned}}</div>
                </div>
                <div class="category-content">
                    <div v-for="task in tasks">
                        {{task.text[locale]}}
                    </div>
                </div>
            </div>
            <div class="day-category col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10  col-xs-offset-1"
                 v-if="childConception">
                <div class="img-container">
                    <img src="../assets/newborn.png">
                </div>
                <div class="color-block">
                    <div class="category-name">{{constants.childConception}}</div>
                </div>
                <div class="category-content">
                    <div class="plus">
                        <div class="category-icon"><i class="material-icons">add_circle</i></div>
                        <div v-html="childConception.title[locale]"></div>
                    </div>
                </div>
            </div>
            <div class="day-category col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10  col-xs-offset-1"
                v-if="!isPersonal">
                <div class="img-container">
                    <img :src="promo.icon">
                </div>
                <div class="color-block">
                    <div class="category-name">{{constants[promo.titleConst]}}</div>
                </div>
                <div class="category-content">
                    <div v-if="promo.paragraphs" v-for="p in promo.paragraphs" v-html="p[locale]">
                    </div>
                    <div v-if="promo.text" v-html="promo.text[locale]">
                    </div>
                    <div class="promo__btn" @click="goToPromo()" v-if="promo.btnLangConst === 'learnMore'">
                        <md-button class="md-raised md-primary">{{constants[promo.btnLangConst]}}</md-button>
                    </div>
                    <div class="promo__link" @click="goToPromo()" v-else>
                        {{constants[promo.btnLangConst]}} >>
                    </div>
                </div>
            </div>
            <div class="day-category col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10  col-xs-offset-1"
                 v-for="(c, index) in categories">
                <div class="promo-block-hider" v-if="isShowBlurPromo(c.name)">
                    <div class="text">
                         Информация по этой категории доступна только в Персональном Лунном Календаре
                    </div>
                     <md-button class="md-raised md-primary">
                         Активировать
                    </md-button>
                </div>
                <div class="img-container">
                    <img :src="c.path">
                </div>
                <div class="color-block">
                    <div class="category-name">{{constants[c.name] | capitalize}}</div>
                </div>
                <div class="category-content"
                :class="{'pre-last': index === categories.length - 2, ' promo-blur': isShowBlurPromo(c.name)}">
                    <div class="plus" v-for="p in c.plus">
                        <div class="category-icon"><i class="material-icons">add_circle</i></div>
                        <div>{{p}}</div>
                    </div>
                    <div class="minus" v-for="m in c.minus">
                        <div class="category-icon"><i class="material-icons">remove_circle</i></div>
                        <div>{{m}}</div>
                    </div>
                </div>
            </div>
            <div class="day-category col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10  col-xs-offset-1"
                 v-if="zodiacGarden">
                <div class="img-container">
                    <img src="../assets/sprout.png">
                </div>
                <div class="color-block">
                    <div class="category-name">{{constants.sowingCalendar}}</div>
                </div>
                <div class="category-content">
                    <div v-html="zodiacGarden.title[locale]"></div>
                    <div class="plus" v-for="p in zodiacGarden.pluses">
                        <div class="category-icon"><i class="material-icons">add_circle</i></div>
                        <div v-html="p[locale]"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
  import script from './day.script'
  export default script
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

    * {
        box-sizing: border-box;
    }

    .no-select {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .up-button {
        position: fixed;
        height: 50px;
        width: 56px;
        cursor: pointer;
        right: 0;
        top: 0;
        z-index: 99;
        background-color: #cccccc;
        opacity: 0.5;
    }
    .up-button i {
        font-size: 46px;
        width: 100%;
        height: 100%;
    }
    .up-button:hover {
        opacity: 1;
    }

    .social-sharing {
        position: absolute !important;
        bottom: 5px;
        right: 25px;
    }
    .social-sharing .fa {
        padding-left: 10px;
        cursor: pointer;
    }
    .social-sharing .fa:hover {
        color: #0074D9;
    }


    .dynamic-info div {
        display: inline-block;
    }

    .dynamic-info div:first-child {
        margin-right: 20px;
    }

    .plus .category-icon i {
        color: #AED581;
    }

    .minus .category-icon i {
        color: #FF8A65;
    }

    .dynamic-icons-block img {
        width: 45px;
    }

    .dynamic-icons-block {
        position: relative;
        margin-top: 9px;
        margin-bottom: 10px;
    }

    .dynamic-icons-block > * {
        display: inline-block;
    }

    .dynamic-icons-block div:nth-child(2) {
        margin-right: 50px;
    }

    .dynamic-icons-block div:nth-child(2n+1) {
        margin-right: 10px;
    }

    .day-info {
        height: auto;
        background-color: white;
        box-shadow: 0 2px 8px gray;
        margin-top: 25px;
        margin-bottom: 25px;
    }

    .day-title {
        font-size: 24px;
        font-weight: 500;
        padding-top: 5px;
    }

    .day-category {
        height: auto;
        background-color: white;
        box-shadow: 0 2px 8px gray;
        position: relative;
        margin-bottom: 25px;
        text-align: left;
    }

    .img-container {
        width: 60px;
        height: 50px;
        position: absolute;
        top: -15px;
        left: -10px;
        z-index: 2;
    }

    .color-block {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 35px;
        background-color: #E8E8E8;
        z-index: 1;

    }

    .category-name {
        font-size: 20px;
        font-weight: 500;
        width: 100%;
        height: 100%;
        text-align: left;
        padding-left: 75px;
        padding-top: 7px;
    }

    .category-content {
        margin-top: 50px;
        word-break: normal;
        text-align: left;
        margin-bottom: 20px;
        margin-left: 30px;
        font-size: 16px;
        color: black;
        padding-left: 30px;
    }

    .category-content.main {
        margin-left: 30px;
        margin-bottom: 50px;
    }

    .category-content > * {
        position: relative;
        margin-bottom: 10px;
    }

    .category-icon {
        position: absolute;
        left: -30px;
        top: 0px;
    }

    .material-icons {
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        font-size: 22px; /* Preferred icon size */
        line-height: 1;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: normal;
        white-space: nowrap;
        direction: ltr;

        /* Support for all WebKit browsers. */
        -webkit-font-smoothing: antialiased;
        /* Support for Safari and Chrome. */
        text-rendering: optimizeLegibility;

        /* Support for Firefox. */
        -moz-osx-font-smoothing: grayscale;

        /* Support for IE. */
        font-feature-settings: 'liga';
    }

    .promo__btn {
        margin-left: -7px;
    }

    .promo__link {
        margin-top: 10px;
        color: indigo;
        cursor: pointer;
        text-decoration: underline;
    }

</style>
