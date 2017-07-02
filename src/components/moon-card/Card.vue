<template>
    <div class="card">
        <slot name="title">
            <div class="card__title">{{title}}</div>
        </slot>

        <div class="card__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
      title: String
    },
    data () {
      return {}
    }
  }
</script>
<style lang="css" scoped>
    .card {
        height: auto;
        background-color: white;
        box-shadow: 0 2px 8px gray;
        padding: 10px;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .card__title {
        font-size: 24px;
        font-weight: 500;
        line-height: 40px;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        height: 40px;
        background-color: #E8E8E8;
    }

    .card__content {
        margin-top: 45px;
    }

</style>
