<template>
  <div v-if="isStarted()">
    <div class="block-lines">
      <GameLine 
      v-for="(line, index) in getLinesForUser()"
      :key="index"
      :index="index"
      v-bind="line"
    />
    </div>
    <div class="bottom">
      <GameKeyboard
        v-if="!decryptedResult"
        :buttons="resolveButtonsForKeyboard()"
        @add-char="(char) => addChar(char)"
        @del-char="delChar()"
        @submit-line="submitLine()"
      />
      <div 
        v-else
        >
        <GameResult
          :decryptedResult="decryptedResult"
        />
      </div>
    </div>
  </div>
  <WordGenerator v-else />
</template>

<script>
import GameLine from './components/GameLine.vue'
import GameKeyboard from './components/GameKeyboard.vue';
import latinize from 'latinize';
import AllowedCharacterChecker from './services/AllowedCharacterChecker';
import LastLineChanger from './services/LastLineChanger';
import ButtonsForKeyboardResolver from './services/ButtonsForKeyboardResolver';
import LinesForUserResolver from './services/LinesForUserResolver';
import LetterHashesResolver from './services/LetterHashesResolver';
import LineSubmitter from './services/LineSubmitter';
import GameResult from './components/GameResult.vue';
import WordGenerator from './components/WordGenerator.vue';

export default {
  name: 'App',
  components: {
    GameLine,
    GameKeyboard,
    GameResult,
    WordGenerator
},
  created() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Backspace') {
        if (this.decryptedResult === null) {
          this.delChar();
        }
        
        return;
      } else if (e.key === 'Enter') {
        this.submitLine();
        
        return;
      }

      let char = latinize(e.key).toUpperCase();
      if (AllowedCharacterChecker.isCharAllowed(char)) {
        this.addChar(char);
      }
    });
  },
  data: function() {
    return {
      decryptedResult: null,
      lines: [''],
      charsCorrect: [],
      charsWarning: [],
    }
  },
  methods: {
    submitLine() {
      this.decryptedResult = LineSubmitter.submitLine(this.decryptedResult, this.lines, this.charsCorrect);
    },
    addChar(char) {
      LastLineChanger.addChar(char, this.lines, LetterHashesResolver.resolveHashes().length);
    },
    delChar() {
      LastLineChanger.delChar(this.lines)
    },
    getLinesForUser() {
      return LinesForUserResolver.resolveLines(this.lines, LetterHashesResolver.resolveHashes(), this.charsCorrect, this.charsWarning, this.decryptedResult !== null);
    },
    resolveButtonsForKeyboard() {
      return ButtonsForKeyboardResolver.resolveButtons(this.charsCorrect, this.charsWarning);
    },
    isStarted() {
      return LetterHashesResolver.resolveHashes().length > 0;
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

.block-lines {
  height: 365px;
}

@media only screen and (min-height: 570px) {
    .bottom {
    position: absolute;
    left: 5px;
    right: 5px;
    bottom: 5px;
    }
}
</style>
