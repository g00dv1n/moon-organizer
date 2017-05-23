<template>
    <div>
        <h3 class="profile__input" v-if="title">{{title}}</h3>
        <el-select v-model="selectedCategories" multiple placeholder="">
            <el-option
                    v-for="c in allCategories"
                    :key="c.name"
                    :label="c.text"
                    :value="c.name">
            </el-option>
        </el-select>
    </div>
</template>

<script>
  import script from './picker.script'
  export default script
</script>

<style lang="css">
    .el-select {
        width: 300px;
    }
</style>
