<template>
    <md-dialog class="md-dialog-alert" ref="dialog" @close="fireCloseEvent()">
        <md-dialog-title>
            <div class="modal-title">
                Мы подготовили для Вас подарок!
            </div>
        </md-dialog-title>

        <md-dialog-content>
            <div class="start-text">
                Активируйте Персональный Лунный Календарь прямо сейчас</br> и получите совершенно бесплатно:
            </div>
            <div class="book">
                <el-carousel :interval="2000" indicator-position="none" arrow="never" class="carousel" height="250px">
                    <el-carousel-item class="slide">
                        <img src="../../assets/gift-screens/1.jpg">
                    </el-carousel-item>
                    <el-carousel-item class="slide">
                        <img src="../../assets/gift-screens/2.jpg">
                    </el-carousel-item>
                </el-carousel>
                <div class="book__desc">
                    <div class="title">
                        электронную книгу
                    </div>
                    <div class="name">
                        "Питание по Луне" <i class="fa fa-gift fa-lg" aria-hidden="true"></i>
                    </div>
                    <div class="plus">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        150 рецептов на каждый лунный день
                    </div>
                    <div class="plus">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        100 + страниц
                    </div>
                    <div class="plus">
                        <i class="fa fa-check" aria-hidden="true"></i>
                        Блюда на любой вкус
                    </div>
                </div>
            </div>

        </md-dialog-content>
        <md-dialog-actions class="actions">
            <md-button class="md-raised md-primary gift-btn" @click.native="goToPromo()">
                Получить подарок!
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
$carousel-width: 150px;
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
    }
}

.start-text {
    font-size: 18px;
    margin-bottom: 25px;
    line-height: 1.5;
}

.book {
    display: flex;
    &__desc {
        margin-left: 50px;
        font-size: 16px;
        .title {
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .name {
            font-size: 22px;
            font-weight: bold;
            margin-bottom: 10px;
            i {
                font-size: 22px;
            }
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
