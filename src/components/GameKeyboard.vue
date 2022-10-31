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
    display: flex;
    justify-content: space-around;
    width: 100%;
    font-size: 24px;
  }

  @media only screen and (min-width: 600px) {
    .button-row {
      max-width: 600px;
      margin-left:auto;
      margin-right:auto;
    }
  }
</style>
