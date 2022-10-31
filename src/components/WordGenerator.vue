<template>
  <div>
    <label for="word">Guessed Word:</label>
    <br/>
    <input 
    name="word"
    type="text"
    v-model="word"
    />
  </div>
  <div>
    <label for="encryptedText">Encrypted Text:</label>
    <br/>
    <textarea
      name="encryptedText"
      v-model="text">
    </textarea>
  </div>
  <div>
    <label for="generatedUrl">Generated Url:</label>
    <br/>
    <textarea
      name="generatedUrl"
      :value="getLink()"
      readonly>
    </textarea>
  </div>
</template>

<script>
  import LetterHashGenerator from '@/services/LetterHashGenerator';
import CryptoJS from 'crypto-js';

export default {
  name: 'GameLetter',
  data: function() {
    return {
      word: 'TIGER',
      text: "N 50°6.98502', E 14°24.20510'",
    }
  },
  methods: {
    getLink() {
      let hash = this.getHash();
      let urlParameters = '?h=' + encodeURIComponent(hash);
      this.word.split('').forEach((char, index) => {
          urlParameters += '&' + (index + 1) + '=' + encodeURIComponent(LetterHashGenerator.generateHash(char, index + 1, hash));
      });

      let url = location.protocol + '//' + location.host + location.pathname + urlParameters;

      return url;
    },
    getHash() {
      return CryptoJS.AES.encrypt(this.text, this.word).toString();
    }
  }
}
</script>

<style scoped>
  textarea {
    min-width: 100%;
  }

  @media only screen and (min-width: 600px) {
    textarea {
      min-width: 600px;
    }
  }
</style>
