<template>
    <header>
       <i class="icon-reorder" @click="showSide"></i>
       <slot></slot>
       <img src="../assets/image/1.png" alt="">
       <i class="icon-user"></i>
    </header>
</template>

<script>
  import bus from '../bus.js'
  export default {
      methods:{
          showSide(){
              bus.$emit('sideShow')
          }
      }
  }
</script>
<!--加上scoped属性 css样式就变为私有的-->
<style scoped>
    header{
      height:44px;
      background:#ff971f;
      position:fixed;
      left:0;
      right:0;
      top:0;
      z-index:100;
      padding:0 15px;
      color:#fff;
      line-height:44px;
      font-size:16px;
    }
    img{
      width: 40px;  
      position: absolute;
      
    }
    header i{
      color:white;
    }
    .title{
      margin-left:15px;
      display:inline-block;
    }
    .icon-user{
      float:right;
      line-height:44px;
    }
</style>
