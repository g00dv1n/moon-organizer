<template>
    <div class="raw promo">
        <!--<div class="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1 promo__title">-->
        <div class="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 promo__title">
            <div class="promo__text">
                <div> {{constants.promoTitle}} </div>

                <md-button class="md-raised md-primary btn" @click.native="goToRegistration()">
                    {{constants.activate}}
                    <i class="strikethrough" v-if="isUSD">4.99 USD</i>
                    <i class="price">{{productInfo.amount}} {{productInfo.currency}}</i>
                </md-button>
            </div>
            <div class="promo__screen" v-if="isBookShowed">
                <img src="../../assets/gift-screens/1.jpg">
            </div>
        </div>
        <moon-card class="promo__card col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
            <div slot="title" class="card__title">
                <div>{{constants.promoCardTitle}}</div>
                <div class="card__subtitle">{{constants.promoCardSubtitle}}</div>
            </div>
            <div class="card__content">
                <div class="card__block" v-for="plus in pluses">
                    <div class="icon col-md-3 col-sm-3 col-xs-12">
                        <img :src="plus.url">
                    </div>
                    <div class="text col-md-9 col-sm-9 col-xs-12">
                        <div class="title">{{plus.title[locale]}}</div>
                        <div class="desc">{{plus.text[locale]}}</div>
                    </div>
                </div>
            </div>
        </moon-card>
        <div class="promo__buyblock">
            <md-button class="md-raised md-primary btn" @click.native="goToRegistration()">
                {{constants.activate}}
                <i class="strikethrough" v-if="isUSD">4.99 USD</i>
                <i class="price">{{productInfo.amount}} {{productInfo.currency}}</i>
            </md-button>
        </div>
        <div class="promo__activate-desc">
            <div class="desc">* {{constants.activateDescription}}</div>
        </div>
        <div class="book" v-if="isBookShowed">
                <el-carousel :interval="2000" indicator-position="none" arrow="never" class="carousel" height="250px">
                    <el-carousel-item class="slide">
                        <img src="../../assets/gift-screens/1.jpg">
                    </el-carousel-item>
                    <el-carousel-item class="slide">
                        <img src="../../assets/gift-screens/2.jpg">
                    </el-carousel-item>
                    <el-carousel-item class="slide">
                        <img src="../../assets/gift-screens/3.jpg">
                    </el-carousel-item>
                </el-carousel>
                <div class="book__desc">
                    <div class="title">
                         <i class="fa fa-gift fa-lg" aria-hidden="true"></i>
                         книга рецептов
                    </div>
                    <div class="name">
                        "Правильное питание по Луне"
                    </div>
                    <div class="plus">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        145 рецептов
                    </div>
                    <div class="plus">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        основные блюда, десерты и напитки
                    </div>
                    <div class="plus">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        меню на каждый лунный день!
                    </div>
                </div>
            </div>
        <div class="promo__end">
            {{constants.supportTeam}} {{constants.supportTeamText}}: moon.organizer@gmail.com / +38 (050) 860-46-24
        </div>
    </div>
</template>

<script>
import script from './promo-page.script'
export default script
</script>

<style lang="scss" scoped>
.promo {
    margin-top: 20px;
}

.promo__title {
    font-size: 20px;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: space-around;
    flex-wrap: wrap;
}

.promo__text {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    .btn {
        // align-items: center;
        margin: 50px 0;
        align-self: center;
    }
}

.promo__screen {
    width: 200px; // margin-left: auto;
    img {
        width: 100%;
    }
}

.promo__description {
    text-align: center;
    font-size: 16px;
    font-weight: 300;
    line-height: 1.5;
    font-style: italic;
    margin-bottom: 20px;
}

.promo__buyblock {
    padding: 15px;
}

.promo__activate-desc {
    display: flex;
    justify-content: center;
    padding: 5px;
    width: 100%;
    margin-bottom: 25px;
    padding-bottom: 25px;
    border-bottom: 1px solid gainsboro;
}

.promo__activate-desc .desc {
    text-align: left;
    max-width: 600px;
    font-size: 14px;
    font-style: italic;
}

.promo__buyblock .text {
    display: inline-block;
    font-size: 18px;
    line-height: 52px;
    vertical-align: middle;
}

.promo__buyblock .btn {
    display: inline-block;
}

@media (max-width: 600px) {
    .promo__buyblock .text {
        line-height: 1.5;
    }
}

.card__title {
    font-size: 20px;
    line-height: 1.5;
    font-weight: 500;
    width: 100%;
    height: auto;
    background-color: #E8E8E8;
    position: absolute;
    padding: 7px 0;
}

.card__subtitle {
    font-size: 18px;
    font-weight: 300;
    font-style: italic;
}

.card__content {
    margin-top: 100px;
    text-align: left;
}

.card__content .title {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 5px;
}

.card__content .desc {
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 5px;
}

.card__block {
    margin-bottom: 25px;
}

.card__block .icon {
    text-align: center;
    padding-bottom: 10px;
}

.card__block img {
    width: 120px;
}

.card__block .text {
    height: 150px;
}

.promo__card {
    margin-bottom: 25px;
}

.promo__end {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    margin-bottom: 25px;
}

.promo__end i {
    cursor: pointer;
}

.promo__end i:hover {
    text-decoration: underline;
}





/* Extra Small Devices, Phones */

@media only screen and (max-width: 480px) {
    .card__block .text {
        height: auto !important;
    }
}

@media only screen and (max-width: 400px) {
    .card__content {
        margin-top: 150px;
    }
}

.strikethrough {
    position: relative;
}

.strikethrough:before {
    border-bottom: 1px solid red;
    position: absolute;
    content: "";
    transform: rotate(-7deg);
    top: -50%;
    left: 0;
    width: 100%;
    height: 100%;
}

.price {
    font-weight: bold;
    font-style: normal;
}

$carousel-width: 180px;
$carousel-height: 250px;

.carousel {
    width: $carousel-width;
    height: $carousel-height;
}

.slide {
    width: $carousel-width;
    img {
        width: 100%;
        height: 100%;
        border: 1px solid gainsboro;
    }
}

.start-text {
    font-size: 18px;
    margin-bottom: 25px;
    line-height: 1.5;
}

.book {
    display: flex;
    flex-wrap: wrap-reverse;
    justify-content: center;
    text-align: left;
    margin: 50px 0;
    &__desc {
        margin-left: 50px;
        font-size: 16px;
        .title {
            font-size: 20px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .name {
            font-size: 22px;
            font-weight: bold;
            margin-bottom: 60px;
        }
        .plus {
            margin: 20px 0;
        }
    }
}
</style>
