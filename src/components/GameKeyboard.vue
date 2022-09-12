<template>
  <div 
  class="button-row"
    v-for="line, index in buttons"
    :key="index"
  >
    <KeyboardButton
      v-for="button, index in line.buttons"
      :key="index"
      v-bind="button"
      @click="pressButton(button)"
    />
  </div>
</template>

<script>
import KeyboardButton from './KeyboardButton.vue';
export default {
    name: "GameKeyboard",
    props: {
      buttons: Array,
    },
    components: { KeyboardButton },
    data: function() {
    },
    methods: {
      pressButton(button) {
        if (button.type === 'done') {
          this.$emit('submitLine');
        } else if (button.type === 'del') {
          this.$emit('delChar');
        } else {
          this.$emit('addChar', button.label);
        }
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .button-row {
    display: inline-flex;
    justify-content: space-around;
    width: 100%;
  }
</style>
