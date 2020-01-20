
<template>
  <div class="overview">
    <div class="overview__header">
      <div class="overview__title overview__title" :style="{color: titleColor}">
        {{ title }}
      </div>
      <div class="overview__icongroups">
        <div class="overview__icongroup">
          <div class="overview__icon">
            <i class="fa fa-th fa-2x" aria-hidden="true"></i>
          </div>
          <div class="overview__icon">
            <i class="fa fa-eye fa-2x" aria-hidden="true"></i>
          </div>
        </div>
      </div>
    </div>
    <div class="overview__body">
      <div class="overview__body-bg">
        <img :src="backgroundImg">
      </div>
      <div class="overview__body-mask overview__body-mask" :style="{background: backgroundColor}"></div>
      <div class="overview__body-container">
        <div class="overview__game-container" :style="{top: -386 * (currentScroll - 1) + 'px'}">
          <div class="overview__game-block" v-if="slicedGamesPerRow">
            <div class="overview__game-row" v-for="games in slicedGamesPerRow">
              <game-element @click="showDetails(game.id)" v-for="game in games" :game="game" :scoreColor="scoreColor"/>
            </div>
          </div>
        </div>
        <div class="overview__scroll-container">
          <game-scroll @onScroll="onScroll" :current="currentScroll" :total="totalScrolls"/>
        </div>
        <div class="timeline" ></div>
      </div>
    </div>
  </div>    
</template>

<script>
import GameElement from './GameElement'
import GameScroll from './GameScroll'
export default {
  props: ['title', 'titleColor', 'backgroundColor', 'backgroundImg', 'scoreColor', 'games'],
  components: {
    GameElement,
    GameScroll
  },
  data: () => {
    return {
      counter: 500,
      slicedGamesPerRow: null,
      currentScroll: 1
    }
  },
  methods: {
    showDetails(id){
      this.$store.dispatch('setDetailId', id)
    },
    onScroll(number){
      this.currentScroll = number
    },
    recount(event){
      const operation = Math.floor(window.innerWidth / 170 - 2.2)
      if(operation > 0){
        this.counter = operation + 1
      }else{
        this.counter = 1
      }
      if(this.currentScroll > this.totalScrolls) this.currentScroll = this.totalScrolls
      this.gamesPerRow()
    },
    gamesPerRow(){
      const newArray = []
      const buffer = [...this.games]
      for(let i = 0; i < this.totalRows; i ++){
        newArray[i] = buffer.slice(i * this.counter, this.counter * (i + 1))
      }
      this.slicedGamesPerRow = newArray
    }
  },
  mounted(){
    this.$nextTick(() => {
      this.recount()
      window.addEventListener('resize', this.recount);
    })
  },
  computed: {
    totalRows(){
      return Math.ceil(this.games.length / this.counter)//this.games.length / this.counter
    },
    totalScrolls(){
      return Math.round(this.totalRows / 2)
    }
  }
}

</script>

<style>
  .overview{
    width: 100%;
  }
  .overview__header{
    width: 100%;
    background-color: #333;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding-left: 10px;
  }
  .overview__title{
    font-size: 24px;
  }
  .overview__icongroups{

  }
  .overview__icongroup{
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
  }
  .overview__icon{
    padding-left: 5px;
    padding-right: 5px;
    color: #bbb;
  }
  .overview__body{
    position: relative;
    width: 100%;
    height: 400px;
  }
  .overview__body-bg{
    height: 100%;
    overflow: hidden;
    width: 100%;
    top: 0;
    position: absolute;
    left: 0;
  }

  .overview__body-bg img{
    width: 100vw;
  }

  @media (max-width: 1065px) { 
    .overview__body-bg{
      text-align: center;
      display: flex;
      justify-content: center;
    }
    .overview__body-bg img{
      min-width: 1065px;
    }
  }
  .overview__body-mask{
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    position: absolute;
    left: 0;
  }
  .overview__body-container{
    height: 100%;
    overflow: hidden;
    width: 100%;
    top: 0;
    position: absolute;
    left: 0;

  }
  .overview__game-container{
    position: absolute;
    transition: 0.5s;
    width: 100%;
    height: 100px;

    margin: 0;
  }
  .overview__game-block{

  }
  .overview__game-row{
    justify-content: center;
    display: flex;
  }
  .overview__scroll-container{
    top: 0;
    width: 100px;
    box-sizing: border-box;
    padding-top: 7px;
    margin: 0;
    padding-bottom: 7px;
    height: 100%;
    display: inline-block;
    justify-content: center;
  }
  .timeline{
    width: 100px;
    position: absolute;
    top: 0;
    right: 0;
    outline: 1px solid black;
    height: 100%;
  }
</style>