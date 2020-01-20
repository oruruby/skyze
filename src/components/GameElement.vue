<template>
  <div class="game" @click="$emit('click')">
    <div class="game__header" :style="{background: game.color}">
      <span class="game__title">
        {{ game.name }}
      </span>
    </div>
    <div class="game__img">
      <img :src="game.preview ? game.preview : 'lock.png'">
    </div>
    <div :class="'game__score'" :style="{background: scoreColor}">
      {{ game.score }}
    </div>
  </div>
</template>

<script>
  export default {
    props: ['game', 'scoreColor'],
    computed: {
   
    }
  }
</script>

<style>
  .game{
    width: 132px;
    height: 155px;
    overflow: hidden;
    margin: 19px;
    cursor: pointer;
    position: relative;
  }
  .game__header{
    width: 132px;
    height: 35px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
  }
  .game__title{
    color: #fff;
    font-size: 16px;
  }
  .game__img{
    width: 132px;
    height: 120px;
  }
  .game__img img{
    width: 100%;
    height: 100%;
  }
  .game__score{
    text-align: center;
    bottom: 0;
    width: 40px;
    height: 35px;
    font-size: 32px;
    right: 0;
    position: absolute;
    color: #fff;
  }
</style>