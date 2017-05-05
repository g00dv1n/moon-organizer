<template>
    <md-dialog class="md-dialog-alert" ref="dialog" @close="fireCloseEvent()">
        <md-dialog-title>
            <div class="modal-title">{{constants.doYouLikeMO}}</div>
        </md-dialog-title>

        <md-dialog-content>
            <div class="content-container">
                <div class="rate">
                    <el-rate
                            v-model="rate"
                            :texts="[constants.terrible, constants.bad, constants.normal, constants.good, constants.excellent]"
                            show-text
                            @change="send()"
                    >
                    </el-rate>
                </div>
                <div class="feedback-label">{{constants.leaveFeedback}}</div>
                <div class="feedback">
                    <el-input
                            type="textarea"
                            :rows="4"
                            v-model="feedbackText">
                    </el-input>
                </div>
            </div>

        </md-dialog-content>
        <md-dialog-actions>
            <md-button class="md-raised md-primary submit-btn" @click.native="send();close()">{{constants.send}}</md-button>
        </md-dialog-actions>
        <div class="closeBtn" @click="close()">
            <i class="material-icons">clear</i>
        </div>
    </md-dialog>
</template>

<script>
    import script from './feedback.script'
    export default script
</script>
<style>

    .md-dialog-container {
        z-index: 9999999 !important;
    }

    .modal-title {
        padding: 5px 20px 15px;
        border-bottom: solid black 1px;
    }
    .rate {
        text-align: center;
        margin-bottom: 50px;
    }
    .rate i {
        font-size: 38px;
    }
    .rate .el-rate__text {
        font-size: 28px;
        display: inline-block;
        text-align: center;
        min-width: 200px;
    }

    .feedback {
        text-align: center;
    }

    .feedback textarea {
        font-size: 18px;
    }

    .feedback-label {
        text-align: left;
        font-size: 18px;
        margin-bottom: 20px;
    }

    .content-container {
        width: 500px;
        padding: 5px 20px;
    }

    .submit-btn {
        bottom: 10px;
        right: 10px;
    }

    @media (max-width: 1023px) {
        .content-container {
            width: auto;
        }
        .rate i {
            font-size: 28px;
        }
    }
</style>
