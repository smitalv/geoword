<template>
  <a 
    class="button"
    :class="{
      'button-correct': correct,
      'button-warning': warning && !correct,
    }"
  >
    {{ label }}
  </a>
</template>

<script>
export default {
  name: 'KeyboardButton',
  props: {
    type: String,
    label: String,
    correct: Boolean,
    warning: Boolean,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .button {
    flex-grow: 1;
    margin: 1px 1px 1px 1px;
    padding: 10px 0 10px 0;
    border: solid;
    border-width: 2px;
    width: 25px;
  }

  .button-correct {
    background-color: rgb(56, 235, 56);
  }

  .button-warning {
    background-color: rgba(240, 240, 22, 0.646);
  }
</style>
