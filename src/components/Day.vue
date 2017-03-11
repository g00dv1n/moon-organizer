<template>
    <div class="container-fluid">
        <div class="row">
            <div class="day-info col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10 col-xs-offset-1"></div>
        </div>
        <div class="row">
            <div class="day-category col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 col-xs-10  col-xs-offset-1" v-for="c in categories">
                <div class="img-container">
                    <img :src="c.path">
                </div>
                <div class="color-block">
                    <div class="category-name text-capitalize">{{c.name}}</div>
                </div>
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
        height: 300px;
        background-color: white;
        box-shadow: 0 2px 8px gray;
        margin-top: 25px;
        padding-left: 25px;
    }

    .day-category {
        height: 200px;
        background-color: white;
        box-shadow: 0 2px 8px gray;
        position: relative;
        margin-top: 25px;
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
        text-align: left;
        padding-left: 80px;
    }

</style>
