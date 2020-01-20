<template>
  <div class="game-overviews">
    <div class="game-overviews--list">
      <game-overview  
        title="AMAZING GAMES"
        titleColor="#FFE040"
        backgroundColor="#D6D1A1"
        backgroundImg="img1.jpg"
        scoreColor="#CCB900"
        :games="amazingGames"
      />

      <game-overview  
        title="GOOD GAMES"
        titleColor="#9F40FF"
        backgroundColor="#B9A1D6"
        backgroundImg="img1.jpg"
        scoreColor="#5B3880"
        :games="goodGames"
      />

      <game-overview  
        title="HALF-BAKED GAMES"
        titleColor="#4098FF"
        backgroundColor="#A1B3D6"
        backgroundImg="img1.jpg"
        scoreColor="#385980"
        :games="okGames"
      />

      <game-overview  
        title="TRASH"
        titleColor="#787878"
        backgroundColor="#C3C3C3"
        backgroundImg="img1.jpg"
        scoreColor="#333"
        :games="trashGames"
      />
      </div>
    <div v-show="detailId != null" class="game-overviews--mask" @click="closeDetail"></div>
    <div v-show="detailId != null" class="overview-modal game-overviews--modal">
      <div class="game overview-modal--game-element">
        <div class="game__header" style="background-color: #4098FF">
          <span class="game__title">
            Super game
          </span>
        </div>
        <div class="game__img">
          <img src="lock.png">
        </div>
        <div :class="'game__score'" style="background-color: #4098FF">
          87
        </div>
      </div>
      <div class="overview-modal--detail-window overview-detail-window">
        <div class="overview-detail-window--banner">
          <img src="img1.jpg">
        </div>
        <div class="overview-detail-window--hr"></div>
        <div class="overview-detail-window--description">
        Vito Scaletta has started to make a name for himself on the streets of Empire Bay as someone who can be trusted to get a job done. Together with his buddy Joe, he is working to prove himself to the Mafia, quickly escalating up the family ladder with crimes of larger reward, status and consequence…
        </div>
        <div class="overview-detail-window--hr"></div>
        <div class="overview-derail-window--scores"></div>
        <div class="overview-detail-window--gallery"></div>
      </div>
    </div>
  </div>
</template>

<script>

import GameOverview from '../components/GameOverview'
import games from './games.js'

export default {
  components: {
    GameOverview
  },
  computed: {
    detailId(){
      return this.$store.getters.detailId
    },
    amazingGames(){
      return this.games.filter(game => game.score >= 90)
    },
    goodGames(){
      return this.games.filter(game => game.score >= 70 && game.score < 90)
    },
    okGames(){
      return this.games.filter(game => game.score >= 50 && game.score < 70)
    },
    trashGames(){
      return this.games.filter(game => game.score < 50)
    },
    games(){
      return (games.sort((a, b) => b.score - a.score))
    }
  },
  methods: {
    closeDetail(){
      this.$store.dispatch('setDetailId', null)
    },
  }
}
</script>

<style scoped>

  .game-overviews{
    position: relative;
    height: auto;
  }

  .game-overviews--list{
    width: 100%;
  }
  .game-overviews--mask{
    position: absolute;
    top: 0;
    background-color: #000000;
    opacity: 0.8;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .game-overviews--modal{
    position: fixed;
    top: 0;
  }
  .overview-modal--game-element{
    border: 4px solid #fff;
    overflow: visible;
    top: 200px;
    left: 100px;

  }
  .overview-modal--game-element:after{
    content: '';
    width: 100px;
    border: 1px solid #fff;
    position: absolute;
    top: calc(50% - 1px);
    left: 100%;
  }
  .overview-detail-window--banner{
    width: 400px;
    height: 200px;
  }
  .overview-detail-window--banner img{
    width: 100%;
    height: 100%;
  }
  .overview-detail-window{
    border: 4px solid white;
    left: 350px;
    top: -120px;
    position: relative;
    background: #fff;
  }
  .overview-detail-window--hr{
    background: #E1E1E1;
    height: 1px;
    width: 40%;
    margin: auto;
    margin-top: 15px;
    margin-bottom: 15px;
    
  }
  .overview-detail-window--description{
    family: 'Roboto';
    word-wrap: break-word;
    width: 400px;
    box-sizing: border-box;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 15px;
    color: #555;
    height: auto;
  }

</style>