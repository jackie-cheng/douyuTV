<template>
  <div class="mr-root">
    <back-header>
      <p class="title">{{$route.params.roomId}}</p>
    </back-header>
    <div class="mr-content">
      <ul>
          <li v-for="l in List">
              <img :src="l.room_thumb" alt="" class="main">
              <p>{{l.room_name}} <span>在线人数:{{l.online}}</span> </p>

              <p>主播:<img :src="l.owner_avatar" alt="" class="owner">{{l.owner_name}}</p>
              <p>体重:{{l.owner_weight}}</p>
              </li>
      </ul>
    </div>
    <back-top></back-top>
    <Loading v-if="showLoad"></Loading>
    <p v-if="error">网络请求失败,请稍后重试...</p>

  </div>
</template>

<script>
  import BackHeader from '../components/BackHeader'
  import BackTop from '../components/BackTop'
  import Loading from '../components/Loading'
  export default {
  data(){
        return {
            showLoad:true,
            List:[],
            error:false,
           
        }
      },
    components: {
      BackHeader, BackTop, Loading
    },
   
   created(){
        this.axios.get(`/douyuapi/RoomApi/room/${this.$route.params.roomId}`)
          .then(data => {
            this.error = false
            this.List.push(data.data.data)
            setTimeout(() => {
              this.showLoad = false
            }, 1000)
          })
          .catch(err => {
            this.error = true
            this.showLoad = false
          })
    
    
    }
  }

</script>

<style scoped>
 .mr-content{
       padding:49px 0 0 0;
        overflow: hidden;
 }
 
 .owner{
     width: 30px;

 }
</style>