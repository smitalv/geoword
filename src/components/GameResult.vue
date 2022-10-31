<template>
  <textarea
        class="textarea-result"
        readonly
        :value="decryptedResult"
        @click="this.select()"
      >
    </textarea>
</template>

<script>
export default {
    name: "GameResult",
    props: {
      decryptedResult: String,
    }
}
</script>

<style scoped>
  .textarea-result {
    margin-left:auto;
    margin-right:auto;
    width: 70%;
    height: 120px;
    resize: none;
    font-size: 24px;
    text-align: center;
  }

  @media only screen and (min-width: 600px) {
    .line {
      max-width: 600px;
    }
  }
</style>
