<template>
  <div>
    <nav class="yls_top_nav">
      <div class="tab_box"></div>
      <div class="yls_top_contain jf_flex_between fl_nblue_bg">
        <a class="left"></a>
        <div class="content jf_flex_center font_white">
          首页
        </div>
        <a class="right"></a>
      </div>
    </nav>
    <div class="menu_box jf_flex_between jf_flex_wrap">
      <div class="item jf_flex_col" v-for="item in 4" @click="gogo">
       <div class="img_box">
         <img src="../../assets/images/game.png" alt="">
       </div>
        <div class="title">
          搜索
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        msg: 'hello vue'
      }
    },
    methods:{
      gogo:function () {
        this.$router.push('/fish')
      }
    }
  }
</script>
<style scoped>
  .menu_box{
    width: calc(80vw);
    min-height: 100px;
    margin: 0 auto;
  }
  .menu_box .item{
    width: calc(25vw);
    height: calc(35vw);
    /**/
    margin: 10px 0;
    /*background-color: lightcoral;*/

  }
  .menu_box .item .img_box{
    width: calc(25vw);
    height: calc(25vw);
    border-radius: 50%;
    overflow: hidden;
  }
  .menu_box .item .img_box img{
    height: 100%;
  }
  .menu_box .item .title{
    width: calc(25vw);
    height: calc(10vw);
    /*background-color: lightcoral;*/
    text-align: center;
    font-size: 15px;
    line-height: calc(10vw);
    color:#4588f1 ;
  }
  .btn{
    width: 100px;
    height: 100px;
    background-color: lightcoral;
  }
</style>
