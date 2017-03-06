<template>
    <div id="app">
        <md-sidenav class="main-sidenav md-left md-fixed" md-swipeable ref="leftSidenav">
            <md-toolbar md-theme="white">
                <img class="logo" v-for="t in types" :src="logoPath(t.name)" v-if="isCurrentType(t.name)">
            </md-toolbar>
            <div class="categories">
                <md-button @click.native="setCurrentType(t.name)"
                           :class="['md-primary', 'category', {'active': isCurrentType(t.name)}]" v-for="t in types">
                    {{t.text}}
                </md-button>

            </div>

        </md-sidenav>

        <md-toolbar class="header">
            <md-button id="menu-btn" class="md-icon-button" @click.native="toggleLeftSidenav">
                <md-icon>menu</md-icon>
            </md-button>
            <h1 class="md-title main-title">Moon Organizer</h1>
        </md-toolbar>
        <md-button-toggle id="lang-switcher" md-single class="md-accent">
            <md-button v-for="l in locales" :class="{'md-toggle': isLocale(l)}" @click.native="setLocale(l)">
                {{l}}
            </md-button>
        </md-button-toggle>

        <router-view></router-view>
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
        background-color: #fafafa;
    }

    @media (min-width: 1281px) {
        #menu-btn {
            display: none;
        }

        .main-sidenav.md-sidenav .md-sidenav-content {
            pointer-events: auto;
            transform: translate3d(0, 0, 0) !important;
            box-shadow: 0 8px 10px -5px rgba(0, 0, 0, .2), 0 16px 24px 2px rgba(0, 0, 0, .14), 0 6px 30px 5px rgba(0, 0, 0, .12);

        }

        #app {
            padding-left: 300px;
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
        position: absolute;
        right: 15px;
        bottom: 15px;
        z-index: 999;
    }


</style>
