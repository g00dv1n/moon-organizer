<template>
    <div class="bio raw">
        <div class="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12">
            <div class="bio__title">{{constants.bioTitle}}</div>
            <vue-chart
                    chart-type="LineChart"
                    :columns="columns"
                    :rows="rows"
                    :options="options"
                    ref="bioChart"
            ></vue-chart>
        </div>
    </div>
</template>

<script>
  import script from './biorhythms.script'
  export default script
</script>

<style lang="css" scoped>
    .bio {
        margin-top: 25px;
    }
    .bio__title {
        text-align: center;
        font-size: 18px;
        margin-bottom: 25px;
    }
</style>
