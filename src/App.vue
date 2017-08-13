<template>
    <div id="app">
        <login-modal ref="loginModal" id="login-modal">
        </login-modal>
        <md-sidenav class="main-sidenav md-left md-fixed" md-swipeable ref="leftSidenav">
            <div class="closeBtn" v-if="isMobile" @click="toggleLeftSidenav()">
                <i class="material-icons">clear</i>
            </div>
            <div v-if="$store.state.personal">
                <personal-sidenav></personal-sidenav>
            </div>
            <div v-else>
                <md-toolbar md-theme="white">
                    <div class="logo" v-if="isCalendarView" @click="logoClick">
                        <img :src="logoPath">
                    </div>
    
                    <router-link class="logo" to="/" v-else>
                        <img :src="logoPath">
                    </router-link>
                </md-toolbar>
                <div class="categories">
                    <md-button @click.native="goToCalendar(t.name)" :class="['md-primary', 'category', {'active': isCurrentType(t.name)}]" v-for="t in types">
                        {{t.text}}
                    </md-button>
                    <hr>
                    <a :href="constants.termOfUseLink">
                        <md-button class="md-primary category">
                            {{constants.termOfUse}}
                        </md-button>
                    </a>
                    <a :href="constants.privacyPolicyLink">
                        <md-button class="md-primary category">
                            {{constants.privacyPolicy}}
                        </md-button>
                    </a>
                    <a :href="constants.refundPolicyLink">
                        <md-button class="md-primary category">
                            {{constants.refundPolicy}}
                        </md-button>
                    </a>
                </div>
            </div>
        </md-sidenav>
    
        <md-toolbar class="header">
            <md-button id="menu-btn" class="md-icon-button" @click.native="toggleLeftSidenav" v-if="isMobile">
                <md-icon>menu</md-icon>
            </md-button>
            <div class="today-btn">
                <md-button class="md-raised" @click.native="todayClickHandler">{{constants.today}}</md-button>
            </div>
            <div class="vline" v-if="!isMobile"></div>
            <div class="help-link" v-if="!isMobile" @click="showTooltips()">
                <md-icon class="md-size-1x md-raised">help</md-icon>
                <md-tooltip md-direction="bottom">
                    <div style="font-size: 15px;">{{constants.helpTooltip}}</div>
                </md-tooltip>
            </div>
            <a class="contacts-link" :href="constants.contactsLink">
                <md-icon class="md-size-1x md-raised">mail</md-icon> 
                <md-tooltip md-delay="400" md-direction="bottom">
                    <div style="font-size: 15px;">{{constants.contactUs}}</div>
                </md-tooltip>
            </a>  
            <md-button-toggle id="lang-switcher" md-single class="md-primary">
                <md-button v-for="l in locales" :class="{'md-toggle': isLocale(l)}" @click.native="setLocale(l)">{{l}}</md-button>
            </md-button-toggle>
            <div class="login-btn" v-if="!authorized">
                <img src="./assets/login.png" @click="openLoginModal()">
                <md-tooltip md-direction="bottom">{{constants.logIn}}</md-tooltip>
            </div>
        </md-toolbar>
        <keep-alive>
            <router-view ref="main"></router-view>
        </keep-alive>
        <feedback-modal ref="feedback" :on-close="openBookmarksModal"></feedback-modal>
        <md-dialog-alert :md-title="constants.addToBookmarks" :md-content-html="constants.addToBookmarksText" ref="bookmarks">
        </md-dialog-alert>
        <!-- for modals tests
                            <md-button class="md-raised" @click.native="openBookmarksModal">bookmarks</md-button>
                            <md-button class="md-raised" @click.native="openFeedbackModal">reviews</md-button>
                            -->
    </div>
</template>

<script>
import script from './app.script'
export default script
</script>

<style>
#app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    overflow: hidden;
}

#app a:visited {
    text-decoration: none;
}

#app a:focus {
    text-decoration: none;
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

#lang-switcher {
    position: absolute;
    right: 15px;
    text-align: left;
    z-index: 2;
}

#lang-switcher button {
    padding: 0 !important;
    width: 35px;
    min-width: 0;
}

.help-link {
    cursor: pointer;
}

.contacts-link {
    color: gainsboro !important;
    background-color: transparent;
    cursor: pointer;
    margin-left: 25px;
}

.contacts-link:hover {
    text-decoration: none !important;
}


.vline {
    border-left: 1px solid white;
    width: 1px;
    padding: 0;
    margin-left: 5px;
    margin-right: 10px;
    height: 40px;
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

    #lang-switcher button {
        width: 50px;
    }
    .today-btn {
        margin-left: 80px;
    }
}

.logo {
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

.header {
    position: relative;
}

.login-btn {
    position: absolute;
    right: 135px;
    top: 15px;
    display: block;
    width: 36px;
    cursor: pointer;
}

.login-modal__content {
    width: 400px;
}

.bookmarks-modal {
    font-size: 18px;
    text-align: center;
}

.bookmarks-modal strong {
    font-weight: 900;
    font-size: 20px;
}

.bookmarks-modal__thanks {
    margin-top: 10px;
}

.bookmarks-modal__thanks i {
    color: rgb(255, 142, 50)
}
</style>
