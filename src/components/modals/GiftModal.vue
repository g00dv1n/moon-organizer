<template>
    <md-dialog class="md-dialog-alert" ref="dialog" @close="fireCloseEvent()">
        <md-dialog-title>
            <div class="modal-title">
                Мы подготовили для Вас подарок!
            </div>
        </md-dialog-title>

        <md-dialog-content>
            <div class="start-text">
                Активируйте Персональный Лунный Календарь прямо сейчас</br> и получите в подарок:
            </div>
            <div class="book">
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
                         книгу рецептов
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

        </md-dialog-content>
        <md-dialog-actions class="actions">
            <md-button class="md-raised md-primary gift-btn" @click.native="goToPromo()">
                Получить подарок
            </md-button>
        </md-dialog-actions>
        <div class="closeBtn" @click="close()">
            <i class="material-icons">clear</i>
        </div>
    </md-dialog>
</template>

<script>
import script from './gift.script'
export default script
</script>
<style lang="scss" scoped>
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

.actions {
    justify-content: center !important;
}

.gift-btn {
    padding: 10px 20px !important;
    font-size: 18px;
}

.modal-title {
    font-size: 22px;
}

</style>
