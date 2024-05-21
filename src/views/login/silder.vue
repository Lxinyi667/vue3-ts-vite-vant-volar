<template>

  <div class="silderStyle">

    <slide-verify

      ref="slideblock"

      @again="onAgain"

      @fulfilled="onFulfilled"

      @success="onSuccess"

      @fail="onFail"

      @refresh="onRefresh"

      :slider-text="text"

      :accuracy="accuracy"

      :imgs="img"

    ></slide-verify>

    <div class="iconButton">

      <span class="el-icon-circle-close" @click="closeButton()"></span>

      <span class="el-icon-refresh"  @click="handleClick"></span>

    </div>

    

    <!-- <button @click="handleClick">在父组件可以点我刷新哦</button> -->

  </div>

</template>

<script>

export default {

  props: ["account", "password"],

  name: "App",

  data() {

    return {

      img:['../../../static/images/yanzheng1.png','../../../static/images/yanzheng2.png','../../../static/images/yanzheng3.png'],

//自定义图片，可以不进行传递，插件默认图片，但加载会比较慢

      msg: "",

      text: "向右拖动滑块完成拼图",

      // 精确度小，可允许的误差范围小；为1时，则表示滑块要与凹槽完全重叠，才能验证成功。默认值为5

      accuracy: 5

    };

  },

  methods: {

    closeButton(){

     this.$emit("showSlid")

    },

    onSuccess() {

      console.log("验证通过");

  

    },

    onFail() {

      console.log("验证不通过");

      //   this.msg = "";

    },

    onRefresh() {

      console.log("点击了刷新小图标");

      //   this.msg = "";

    },

    onFulfilled() {

      console.log("刷新成功啦！");

    },

    onAgain() {

      console.log("检测到非人为操作的哦！");

      //   this.msg = "try again";

      // 刷新

      this.$refs.slideblock.reset();

    },

    handleClick() {

      this.$refs.slideblock.reset();

    }

  }

};

</script>

<style scoped>

.silderStyle{

  border: 1px solid rgb(159, 163, 172);

  padding: 5px;

  background:#fff;

  width: 320px;

  height: 240px;

  text-align: center;

}

.silderStyle /deep/ .slide-verify{

  margin: auto;

}

.silderStyle /deep/ .slide-verify-slider {

  margin-top: -2px !important;

  /* border-radius: 25px !important; */

  font-size: 14px !important;

  line-height: 38px !important;

}

.silderStyle /deep/ .slide-verify-slider-mask-item {

  border-radius: 25px;

}

.silderStyle /deep/ .slide-verify-slider-mask-item:hover {

  background-color: #e8e7f8;

  border: 1px solid #fff;

}

.silderStyle /deep/ .container-success,

.silderStyle /deep/ .slide-verify-slider-mask,

.silderStyle /deep/ .container-success .slide-verify-slider-mask,

.silderStyle /deep/ .container-success .slide-verify-slider-mask-item,

.silderStyle /deep/ .container-acvtive .slide-verify-slider-mask-item {

  background: #e8e7f8;

  /* border-radius: 25px; */

  border: 1px solid #e8e7f8;

}

.iconButton{

 /* border-top: 1px solid rgb(159, 163, 172); */

 text-align: left;

 font-size: 30px;

 padding-left: 10px;

 margin-top: 5px;

 color: rgb(159, 163, 172);

}

.el-icon-circle-close,.el-icon-refresh{

cursor: pointer;

}

</style>
