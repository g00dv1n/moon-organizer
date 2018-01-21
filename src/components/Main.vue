<template>
    <div class="hello">
        <category-modal ref="modal" id="modal" :md-title="title">
            <div class="category-content" v-if="category">
                <div class="plus" v-for="p in category.plus">
                    <div class="category-icon"><i class="material-icons">add_circle</i></div>
                    <div>{{p}}</div>
                </div>
                <div class="minus" v-for="m in category.minus">
                    <div class="category-icon"><i class="material-icons">remove_circle</i></div>
                    <div>{{m}}</div>
                </div>
            </div>
            <div class="try-again" v-else>
                <div class="text-center">{{constants['tryAgain']}}</div>
            </div>
            <div class="promo__modal">
                <div class="promo__separator"></div>
                <div v-if="promo.paragraphs" v-for="p in promo.paragraphs" v-html="p[locale]">
                </div>
                <div v-if="promo.text" v-html="promo.text[locale]">
                </div>
                <div class="promo__link" @click="goToPromo()">{{constants[promo.btn]}} >></div>
            </div>
        </category-modal>
        <div class="container" id="calendar-container">
            <div class="calendar-wraper">
                <!-- Promo category blur
                <promo-blur-block v-if="isShowBlurPromo(currentType)">
                </promo-blur-block> -->
                <calendar :locale="locale" :geo="geo" :day-click-handler="dayClickHandler()"
                        :is-colored-handler="isColoredHandler()" v-if="geo" >
                </calendar>               
            </div>
        </div>
    </div>
</template>

<script>
  import script from './main.script'
  export default script
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    * {
        box-sizing: border-box;
        font-size: 16px;
    }

    html, body {
        height: 100%;
    }

    @media (min-width: 720px) {
        .container {
            width: 65%;
        }
    }

    @media (max-width: 719px) {
        .container {
            width: 100%
        }
    }

    .calendar-wraper{
        position: relative;
        width: 100%;
        height: 100%;
    }

    .container {
        margin-top: 25px;
    }

    .try-again {
        width: 100%;
        padding: 0;
        margin-top: 15px;
    }

    .category-content {
        margin-top: 10px;
        word-break: normal;
        text-align: left;
        margin-bottom: 10px;
        margin-left: 30px;
        color: black;
        max-width: 500px;
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

    .plus .category-icon i {
        color: #AED581;
    }

    .minus .category-icon i {
        color: #FF8A65;
    }

    .promo__separator {
        border-top: 1px solid darkgray;
        padding: 0;
        max-width: 450px;
        margin-right: 0;
        margin-left: 0;
        height: 2px;
        margin-top: 30px;
        margin-bottom: 20px;
    }
    .promo__modal {
        word-break: normal;
        text-align: left;
        margin-bottom: 10px;
        margin-left: 30px;
        color: black;
        max-width: 500px;
    }
    .promo__modal > * {
        font-size: 14px;
    }
    .promo__link {
        margin-top: 10px;
        color: indigo;
        cursor: pointer;
        text-decoration: underline;
    }

</style>
