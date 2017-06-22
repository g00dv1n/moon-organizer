<template>
    <div class="zodiac raw">
        <moon-card class="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1"
                   :title="constants.lunarZodiacSign">
            <div class="zodiac__content">
                <div class="zodiac__icon">
                    <img :src="icon">
                </div>
                <div class="zodiac__title" v-html="content.title[locale]"></div>
                <div class="zodiac__item">
                    <div>{{constants.ruler}}: </div>
                    <div>{{content.ruler[locale]}}</div>
                </div>
                <div class="zodiac__item">
                    <div>{{constants.talismans}}: </div>
                    <div>{{content.talismans[locale]}}</div>
                </div>
                <div class="zodiac__item">
                    <div>{{constants.character}}: </div>
                    <div>{{content.character[locale]}}</div>
                </div>
                <div class="zodiac__info">
                    <div v-for="p in content.paragraphs" v-html="p[locale]"></div>
                </div>
            </div>
        </moon-card>
    </div>
</template>

<script>
  import script from './zodiac.script'
  export default script
</script>

<style lang="css" scoped>
    .zodiac {
        margin-top: 50px;
        margin-bottom: 50px;
        font-size: 16px;
    }

    .zodiac__content {
        padding: 0 10px;
    }

    .zodiac__title {
        font-size: 20px;
        margin: 25px 0;
    }

    .zodiac__icon {
        width: 100%;
        text-align: center;
        margin-bottom: 25px;
    }
    .zodiac__icon img {
        width: 100px;
    }
    .zodiac__item {
        margin: 10px 0;
        text-align: left;
    }

    .zodiac__item > * {
        display: inline;
        word-wrap: break-word;
    }
    .zodiac__item div:first-child {
        font-weight: bold;
    }

    .zodiac__info {
        margin-top: 25px;
    }
    .zodiac__info > * {
        text-align: left;
        margin: 10px 0;
    }

</style>
