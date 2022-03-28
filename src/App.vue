<template>
  <div id="app">
    <div class="header">
      <div class="header_top">
        <img src="@/assets/logo.png" class="logo" />
        <div class="input">
          <input type="text" placeholder="螺丝钉" />
          <i class="iconfont icon-sousuo"></i>
        </div>
        <i class="iconfont icon-200yonghu_yonghu"></i>
        <div class="download">下载APP</div>
      </div>

      <!-- tab -->
      <div class="header_bottom">
          <ul>
              <li> <router-link to="/"> 首页 </router-link> </li>
              <li> <router-link to="/Tv"> 电视剧 </router-link> </li>
              <li> <router-link to="/Movie"> 电影 </router-link> </li>
              <li> <router-link to="/Variety"> 综艺 </router-link> </li>
              <li> <router-link to="/Anime"> 动漫 </router-link> </li>
          </ul>
          <div><i class="iconfont icon-xiajiantou"></i></div>
      </div>
    </div>

    <router-view />
  </div>
</template>

<style>
.header_top {
  padding: 0 8px;
  display: flex;
  justify-content:space-between;
  align-items: center;
  height: 30px;
  margin-top: 8px;
}
.header_top .input {
  width: 156px;
  height: 30px;
  position: relative;
}
.header_top .input input {
  width: 142px;
  height: 30px;
  padding-left: 14px;
  border: none;
  background: #f0f0f0;
  cursor: pointer;
  outline: none;
  border-radius: 50px;
}
.header_top .input i {
  position: absolute;
  right: 10px;
  top: 6px;
}
.header_top .icon-200yonghu_yonghu {
  font-size: 20px;
  color: #424242;
}
.header_top .download {
  width: 64px;
  height:28px;
  line-height: 28px;
  text-align: center;
  background: #000;
  font-size:12px;
  color: #61f6ff;
  border-radius: 50px;
}
.header_bottom {
   display: flex;
   height: 50px;
   align-items: center;
   justify-content:space-between;
}
.header_bottom ul {
  display:flex;
}
.header_bottom ul li {
  padding: 0 16px;
}
.header_bottom ul li a {
  font-size:14px;
  color:#222222;
}
.header_bottom div {
  padding: 0 20px;
}
.logo {
  width: 86px;
  height: 16px;
}
</style>
