<template>
  <div 
    class="line"
    :style="{ 'opacity': getOpacity() }"
    >
    <GameLetter
      v-for="(letter, index) in letters"
      :key="index"
      v-bind="letter"
    />
  </div>
</template>

<script>
import GameLetter from './GameLetter.vue';

export default {
  name: 'GameLine',
  components: {
    GameLetter
  },
  props: {
    index: Number,
    letters: String,
  },
  methods: {
    getOpacity() {
      return 1 - (this.index * 0.3);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .line {
    display: inline-flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;
  }
</style>
