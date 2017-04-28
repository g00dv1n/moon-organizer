<template>
    <div id="app">
        <md-sidenav class="main-sidenav md-left md-fixed" md-swipeable ref="leftSidenav">
            <div class="closeBtn" v-if="isMobile" @click="toggleLeftSidenav()">
                <i class="material-icons">clear</i>
            </div>
            <md-toolbar md-theme="white">
                <img class="logo" :src="logoPath">
            </md-toolbar>
            <div class="categories">
                <md-button @click.native="goToCalendar(t.name)"
                           :class="['md-primary', 'category', {'active': isCurrentType(t.name)}]" v-for="t in types">
                    {{t.text}}
                </md-button>

            </div>
        </md-sidenav>

        <md-toolbar class="header">
            <md-button id="menu-btn" class="md-icon-button" @click.native="toggleLeftSidenav" v-if="isMobile">
                <md-icon>menu</md-icon>
            </md-button>
            <h1 class="md-title main-title">Moon Organizer</h1>
        </md-toolbar>
        <md-button-toggle id="lang-switcher" md-single class="md-primary">
            <md-button v-for="l in locales" :class="{'md-toggle': isLocale(l)}" @click.native="setLocale(l)">{{l}}</md-button>
        </md-button-toggle>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>

    </div>
</template>

<script>
  import script from './app.script'
  export default script
</script>

<style>
    #app {
        font-family: 'Roboto';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        overflow: hidden;
    }

    .closeBtn {
        position: absolute;
        right: 10px;
        top: 10px;
        z-index: 99;
        cursor: pointer;
    }
    .closeBtn i {
        font-size: 26px;
    }
    .closeBtn:hover {
        color: #0074D9 !important;
    }


    body {
        background-color: #fafafa !important;
    }

    /* костыль */
    @media (min-width: 1024px) {

        .main-sidenav.md-sidenav .md-sidenav-content {
            pointer-events: auto;
            transform: translate3d(0, 0, 0) !important;
            box-shadow: 0 8px 10px -5px rgba(0, 0, 0, .2), 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12);

        }

        #app {
            margin-left: 300px !important;
        }
    }

    img.logo {
        width: 150px;
        display: block;
        margin: 5px auto 10px;
    }

    .categories {
        margin-top: 20px;

    }

    .category {
        width: 90%;
        margin: 4px !important;
        padding: 0;
        text-align: left !important;
    }

    .categories :not(.active) {
        color: black !important;
    }

    .categories .category.active {
        background-color: whitesmoke;
    }

    .main-title {
        margin-left: 30px !important;
    }

    #lang-switcher {
        position: fixed;
        right: 0px;
        bottom: 5px;
        z-index: 2;
    }

    /* Tooltips styles */

    .next-btn {
        color: white;
        border-color: hotpink;
        background-color: hotpink;
        font-size: 18px;
        font-weight: 600;
        width: 150px;
    }
    .next-btn:hover {
        background-color: deeppink;
    }
    .next-btn:active {
        border-color: hotpink
    }

    .skip-btn {
        color: white;
        border-color: darkgray;
        width: 150px;
    }
    .skip-btn:hover {
        background-color: darkgray;
    }
    .skip-btn:active {
        border-color: darkgray;
    }

    .enjoyhint_close_btn {
        border-color: darkgray;
        color: white;
    }

    .enjoyhint_close_btn:hover {
        background-color: darkgray;
    }
    .enjoyhint_close_btn:active {
        border-color: darkgray;
    }

    .empty-btn {
        display: none;
    }
    /* end tooltips styles */

</style>
