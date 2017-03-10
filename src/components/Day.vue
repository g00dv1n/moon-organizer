<template>
    <div class="day-info-container">
        <div class="day-info"></div>
        <div class="category" v-for="c in categories">
            <div class="img-container">
                <img :src="c.path">
            </div>
            <div class="color-block">
                <div class="category-name text-capitalize">{{c.name}}</div>
            </div>

        </div>
    </div>

</template>

<script>
  import script from './day.script'
  export default script
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    * {
        box-sizing: border-box;
    }

    .day-info {
        width: 600px;
        margin-top: 25px;
        height: 300px;
        background-color: white;
        display: inline-block;
        box-shadow: 0 2px 8px gray;
    }
    .day-info-container {
        width: 100%;
        text-align: center;
    }
    .category {
        width: 600px;
        margin-top: 25px !important;
        height: 200px;
        background-color: white;
        display: inline-block;
        box-shadow: 0 2px 8px gray;
        position: relative;
    }
    .img-container {
        width: 60px;
        height: 50px;
        position: absolute;
        top: -15px;
        left: -10px;
        z-index: 2;
    }
    .color-block {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 35px;
        background-color: #E8E8E8;
        z-index: 1;

    }
    .category-name {
        font-size: 20px;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 80px;
    }

</style>
