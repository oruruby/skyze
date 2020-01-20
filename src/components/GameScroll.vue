<template>
    <div class="scroll">
      <div class="scroll__element-container" :style="{top: calcOffset + 'px'}">
      
        <div 
          class="scroll-element" 
          v-for="i in total"
          :class="{'scroll-element--active' : i == current}"
          @click="$emit('onScroll', i)"
        >
          
        </div>
      </div>
    </div>
</template>
<script>

  export default {
    props: ['total', 'current'],
    computed: {

    },
    mounted(){
      console.log(this.total)
    },
    computed: {
      calcOffset(){
        const offset = -54
        if(this.total <= 7) return 0
        if(this.current > 4){
          if(this.current > this.total - 3){
            return offset * (this.total - 7)
          }else{
            return offset * (this.current - 4)
          }
        }
        return 0
      }
    }
  }

</script>
<style>
  .scroll{
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 0;
  }
  .scroll__element-container{
    margin: auto;
    transition: 0.5s;
    position: relative;
  }
  .scroll-element{
    width: 45px;
    height: 45px;
    background-color: #CCC;
    opacity: 0.2;
    margin: 9px;
    cursor: pointer;
    transition: 0.5s;
  }
  .scroll-element--active{
    opacity: 0.8;
  }
</style>