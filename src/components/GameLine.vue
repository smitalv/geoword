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
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;
    font-size: 36px;
  }

  @media only screen and (min-width: 600px) {
    .line {
      margin-left: auto;
      margin-right: auto;
      max-width: 600px;
    }
  }
</style>
