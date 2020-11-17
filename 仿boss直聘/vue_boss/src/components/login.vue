<template>
  <div class="sty_1">
    <!-- 轮播图 -->
    <div>
      <van-swipe class="my-swipe" :autoplay="2000" :show-indicators='false'>
        <van-swipe-item class="loginBg_1"></van-swipe-item>
        <van-swipe-item class="loginBg_2"></van-swipe-item>
        <van-swipe-item class="loginBg_3"></van-swipe-item>
      </van-swipe>
    </div>
    <div>
      <van-button class="loginBtn_1" type="primary">我要招人</van-button>
      <van-button class="loginBtn_2" type="primary" to="/index_jobList">我要应聘</van-button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '高仿boss直聘app'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sty_1{font-size:.3rem;height: 100%;position: relative;}
.my-swipe{
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
    position: absolute;left: 0;top: 0;
    height: 100%;width: 100%;
  }

.loginBg_1{
  width: 100%;height: 100%;
  background-image:url('../assets/loginMask/1.jpg') ;
  background-repeat:no-repeat ;
  background-size:100% ;
  background-position: 0;
}

.loginBg_2{
  width: 100%;height: 100%;
  background-image:url('../assets/loginMask/2.jpg') ;
  background-repeat:no-repeat ;
  background-size:100% ;
  background-position: 0;
}

.loginBg_3{
  width: 100%;height: 100%;
  background-image:url('../assets/loginMask/3.jpg') ;
  background-repeat:no-repeat ;
  background-size:100% ;
  background-position: 0;
}

.loginBtn_1{
  position: absolute;bottom:1rem;left:1rem;
  z-index: 5;height: .8rem;line-height: .8rem;
}
.loginBtn_2{
  position: absolute;bottom:1rem;right:1rem;
  z-index: 5;height: .8rem;line-height: .8rem;
}
</style>
