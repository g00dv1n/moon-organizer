<template>
    <div class="todo-container row">
        <moon-card class="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1"
                   title="Список моих дел:">
            <el-collapse class="todo-collapse">
                <el-collapse-item title="Consistency" name="1">
                    <div>Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;</div>
                    <div>Consistent within interface: all elements should be consistent, such as: design style, icons and texts, position of elements, etc.</div>
                </el-collapse-item>
                <el-collapse-item title="Feedback" name="2">
                    <div>Operation feedback: enable the users to clearly perceive their operations by style updates and interactive effects;</div>
                    <div>Visual feedback: reflect current state by updating or rearranging elements of the page.</div>
                </el-collapse-item>
                <el-collapse-item title="Efficiency" name="3">
                    <div>Simplify the process: keep operating process simple and intuitive;</div>
                    <div>Definite and clear: enunciate your intentions clearly so that the users can quickly understand and make decisions;</div>
                    <div>Easy to identify: the interface should be straightforward, which helps the users to identify and frees them from memorizing and recalling.</div>
                </el-collapse-item>
                <el-collapse-item title="Controllability" name="4">
                    <div>Decision making: giving advices about operations is acceptable, but do not make decisions for the users;</div>
                    <div>Controlled consequences: users should be granted the freedom to operate, including canceling, aborting or terminating current operation.</div>
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
        margin-top: 100px;
    }
    .todo-collapse {
        margin-top: 25px;
        display: inline-block;
        width: 100%;
        text-align: left;
    }

</style>
