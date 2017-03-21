<template>
    <md-dialog class="md-dialog-alert" ref="dialog" @close="fireCloseEvent()">
        <md-dialog-title v-if="mdTitle">{{ mdTitle }}</md-dialog-title>

        <md-dialog-content>
            <slot></slot>
        </md-dialog-content>

        <md-dialog-actions>
            <md-button class="md-primary" @click.native="close()">{{ mdOkText }}</md-button>
        </md-dialog-actions>
    </md-dialog>
</template>

<script>
  export default {
    props: {
      mdTitle: String,
      mdOkText: {
        type: String,
        default: 'Ok'
      }
    },
    data: () => ({
      debounce: false
    }),
    methods: {
      fireCloseEvent    () {
        if (!this.debounce) {
          this.$emit('close')
        }
      },
      open  () {
        this.$emit('open')
        this.debounce = false
        this.$refs.dialog.open()
      },
      close () {
        this.fireCloseEvent()
        this.debounce = true
        this.$refs.dialog.close()
      }
    }
  }
</script>
<style>
    .md-dialog, .md-dialog-content {
        overflow: auto !important;
    }
    .md-dialog-title {
        text-align: center;
    }
</style>
