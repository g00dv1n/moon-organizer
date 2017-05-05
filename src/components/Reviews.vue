<template>
    <div>
        <div class="review" v-for="r in reviews">
            <div class="review__date">{{formatDate(r.created_at)}}</div>
            <div class="review__date">
                <el-rate v-model="r.rate" disabled></el-rate>
            </div>
            <div class="review__text" v-if="r.feedback">{{r.feedback}}</div>
        </div>
    </div>
</template>

<script>
  import script from './reviews.script'
  export default script
</script>

<style>
    .review {
        margin: 30px auto;
        width: 500px;
    }
    .review__date {
        display: inline-block;
        font-size: 18px;
        margin-right: 50px;
        font-weight: 600;
    }
    .review__text {
        text-align: left;
        margin-top: 25px;
        margin-bottom: 50px;
        padding-left: 250px;
        font-size: 16px;
        font-style: italic;
    }
    review__rate {
        display: inline-block;
    }
    .review i {
        font-size: 24px !important;
    }
</style>
