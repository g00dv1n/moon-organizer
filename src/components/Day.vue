<template>
    <div class="container-fluid">
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
                            <b>{{constants.end | capitalize}}: </b>
                            {{lunarDay.end}}
                        </div>
                        <img :src="zodiacSignPath">
                        <div>
                            <b>{{constants.zodiacSign | capitalize }}: </b>{{constants[day.zodiac] | capitalize}}
                            <b>{{constants.moonPhase | capitalize }}: </b>{{day.moonPhase | capitalize}}
                        </div>
                    </div>
                    <div v-for="m in main"><b>{{constants[m.name] | capitalize}}: </b> {{m.text}}</div>
                </div>
            </div>
        </div>
        <div class="row day-raw">
            <div class="day-category col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10  col-xs-offset-1"
                 v-for="c in categories">
                <div class="img-container">
                    <img :src="c.path">
                </div>
                <div class="color-block">
                    <div class="category-name">{{constants[c.name] | capitalize}}</div>
                </div>
                <div class="category-content">
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
        </div>
    </div>

</template>

<script>
  import script from './day.script'
  export default script
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    * {
        box-sizing: border-box;
    }

    .dynamic-info img {
        width: 128px;
        margin-top: 25px;
        margin-bottom: 25px;
        display: inline-block;
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
        width: 100%;
        height: 100%;
        text-align: left;
        padding-left: 80px;
    }

    .category-content {
        margin-top: 50px;
        word-break: normal;
        text-align: left;
        margin-bottom: 20px;
        margin-left: 60px;
        font-size: 18px;
        color: black;
    }

    .category-content.main {
        margin-left: 30px;
    }

    .category-content > * {
        position: relative;
        margin-bottom: 10px;
    }

    .category-icon {
        position: absolute;
        left: -30px;
        top: 2px;
    }

    .material-icons {
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        font-size: 24px; /* Preferred icon size */
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


</style>
