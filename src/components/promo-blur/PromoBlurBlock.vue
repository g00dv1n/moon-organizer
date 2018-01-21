<template>
    <div class="promo-block-hider">
        <div class="text">
            {{constants.blurText}}
        </div>
        <router-link :to="{name: 'promo-page'}">
            <md-button class="md-raised md-primary">
                {{constants.blurActivate}}
            </md-button>
        </router-link>

    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'promo-blur-block',
  computed: {
    ...mapGetters(['constants'])
  }
}
</script>
