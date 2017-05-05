<template>
    <div>
        <div class="review" v-for="r in reviews">
            <div class="review__date">{{formatDate(r.created_at)}}</div>
            <el-rate v-model="r.rate" disabled></el-rate>
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
        margin: 15px auto;
        width: 500px;
    }
    .review__date {
        float: left;
        font-size: 18px;
        font-weight: 600;
    }
    .review__text {
        text-align: left;
        margin-top: 15px;
        font-size: 16px;
        font-style: italic;
    }
    .review i {
        font-size: 24px !important;
    }
</style>
