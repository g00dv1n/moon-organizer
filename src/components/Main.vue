<template>
    <div class="hello">
        <div class="container" id="calendar-container">
            <calendar :locale="locale" :geo="geo" v-if="geo"></calendar>
        </div>
    </div>
</template>

<script>
  import script from './main.script'
  export default script
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

    * {
        box-sizing: border-box;
    }

    html, body {
        height: 100%;
    }



    @media (min-width: 1281px) {
        .container {
            width: 65%;
        }
    }

    @media (max-width: 1280px) {
        .container {
            width: 100%;
        }
    }

    .container {
        margin-top: 25px;
    }


</style>
