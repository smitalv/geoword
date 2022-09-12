<template>
  <span
   class="box"
   :class="{
    'box-correct': correct,
    'box-warning': warning,
   }"
   >
    {{ char }}
  </span>
</template>

<script>
export default {
  name: 'GameLetter',
  props: {
    char: String,
    correct: Boolean,
    warning: Boolean,
  }
}
</script>

<style scoped>
  .box {
    flex-grow: 1;
    height: 30px;
    max-width: 25px;
    margin: 0 3px 0 3px;
    border: solid;
    border-width: 2px;
  }

  .box-correct {
    background-color: rgb(56, 235, 56);
  }

  .box-warning {
    background-color: rgba(240, 240, 22, 0.646);
  }
</style>
