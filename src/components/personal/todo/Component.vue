<template>
    <div class="todo-container row">
        <moon-card class="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1"
                   title="Список моих дел:">
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
        </moon-card>
    </div>
</template>

<script>
  import script from './component.script'
  export default script
</script>

<style lang="css" scoped>
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

</style>
