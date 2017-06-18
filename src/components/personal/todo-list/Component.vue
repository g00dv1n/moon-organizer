<template>
    <div class="todo-container row">
        <moon-card  class="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1"
                   :title="constants.myTodoList">
            <img class="todo__img left" src="../../../assets/pen-container.png">
            <img class="todo__img right" src="../../../assets/notepad.png">
            <div class="todo__tooltip">{{constants.todoListTooltip}}</div>
            <div class="todo__title2">{{constants.monthPlan}}</div>
            <el-collapse class="todo-collapse">
                <el-collapse-item v-for="c in categories" :title="constants[c] | capitalize" :name="c">
                    <div class="todo__task" v-for="task in tasks[c]">
                        <el-checkbox v-model="task.selected">
                            {{task.text[locale]}}
                        </el-checkbox>
                    </div>
                </el-collapse-item>
            </el-collapse>
            <md-button class="md-raised md-primary" @click.native="saveTasks">
                {{constants.calculate}}
            </md-button>
        </moon-card>
        <div class="progress__background" v-if="isCalculation">
            <el-progress class="progress__bar" :status="status" type="circle" :percentage="persent">
            </el-progress>
        </div>
    </div>
</template>

<script>
  import script from './component.script'
  export default script
</script>

<style lang="css">
    .todo__img {
        position: absolute;
        width: 80px;
        top: 0;
    }
    .todo__img.right {
        right: -150px;
    }
    .todo__img.left {
        left: -130px;
    }

    .todo-container {
        margin-top: 50px;
        margin-bottom: 50px;
    }
    .todo-collapse {
        margin-top: 25px;
        display: inline-block;
        width: 100%;
        text-align: left;
    }
    .todo__task {
        display: block;
        width: 100%;
    }
    .todo__title2 {
        text-align: left;
        font-size: 18px;
        margin-left: 15px;
        margin-top: 10px;
    }
    .todo__task label {
        font-weight: normal;
        white-space: normal;
    }
    .todo__tooltip {
        font-style: italic;
        padding-left: 15px;
        padding-right: 15px;
        margin-bottom: 25px;
        margin-top: 50px;
        font-size: 18px;
    }

    .progress__background {
        z-index: 100;
        position: fixed;
        top:0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }
    .progress__bar {
        z-index: 200;
        position: absolute;
        top: 250px;
    }

    .progress__bar .el-progress__text {
        color: whitesmoke !important;
    }

</style>
