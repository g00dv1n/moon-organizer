<template>
    <md-dialog class="md-dialog-alert" ref="dialog" @close="fireCloseEvent()">
        <md-dialog-title v-if="weekDay">
            <div class="modal-title text-capitalize">{{weekDay.name}}</div>
        </md-dialog-title>

        <md-dialog-content v-if="weekDay">
            <div class="planet-logo">
                <img :src="weekDay.planetLogoPath">
            </div>
            <div class="description" v-html="weekDay.description">
            </div>
        </md-dialog-content>
        <md-dialog-actions>
            <md-button class="md-raised md-primary submit-btn" @click.native="close()">OK</md-button>
        </md-dialog-actions>
        <div class="closeBtn" @click="close()">
            <i class="material-icons">clear</i>
        </div>
    </md-dialog>
</template>

<script>
    import script from './weekday.script'
    export default script
</script>
<style>
    .submit-btn {
        bottom: 10px;
        right: 10px;
    }
    .planet-logo {
        width: 128px;
        float: left;
        padding-right: 15px;
        padding-bottom: 15px;
    }

    .description {
        font-size: 16px;
        word-wrap: break-word;
        max-width: 500px;
    }


</style>
