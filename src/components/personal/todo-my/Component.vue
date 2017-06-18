<template>
    <div class="todo-container row">
        <moon-card class="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1" :title="constants.myTodoList">
            <img class="todo__img left2" src="../../../assets/star.png">
            <img class="todo__img right2" src="../../../assets/wand.png">
            <div class="todo__tooltip" v-if="canSave">{{constants.todoDaysTooltip}}</div>
            <div class="todo__tooltip" v-else>
                {{constants.yourTaskList}} {{tasksFrom}}
                </div>
            <div class="todo__title2">{{constants.todoPlanned}}</div>
            <div class="todo__days">
                <div class="todo__task" v-for="task in tasks">
                    <el-checkbox v-model="task.checked" v-if="canSave">
                        {{task.text[locale]}} —
                        <i class="text-capitalize">{{formatTaskDate(task.showedDay)}}</i>
                    </el-checkbox>
                    <div v-else>
                        {{task.text[locale]}} —
                        <i class="text-capitalize">{{formatTaskDate(task.showedDay)}}</i>
                    </div>
                </div>
            </div>
            <div class="todo__buttons">
                <md-button class="md-raised md-default" @click.native="createNew">
                    {{constants.createNew}}
                </md-button>
                <md-button v-if="canSave" class="md-raised md-primary" @click.native="save">
                    {{constants.addToCalendar}}
                </md-button>
            </div>
        </moon-card>
    </div>
</template>

<script>
import script from './component.script'
export default script
</script>

<style lang="css" scoped>

    .todo__img.right2 {
        right: -130px;
        top: 15px
    }
    .todo__img.left2 {
        left: -120px;
        width: 70px;
    }

    .todo__task i {
        color: green;
    }
    .todo__days {
        text-align: left;
        margin-left: 15px;
        margin-top: 20px;
        margin-bottom: 50px;
    }
    .todo__days > * {
        margin-bottom: 10px;
    }

    .todo__buttons {
        text-align: right;
    }
</style>
