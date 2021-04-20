<template>
  <!-- 顶部菜单区域 -->
  <div>
    <div style="float: left">
      <i @click="change_aside_state" :class="aside_state == true ? 'el-icon-s-fold' : 'el-icon-s-unfold'" id="head_icon" />
    </div>
    <SettingSpace id="right" />
    <div id="right">
      <i class="el-icon-bell" id="message_icon"/>
      <el-badge is-dot class="item"></el-badge>
    </div>
    <el-dropdown trigger="click" style="font-size:100%;float:right;margin-right:10px">
      <span class="el-dropdown-link">
        <el-avatar :src="user.user_avatar_url" style="margin-top:10px;float:left;margin-right:10px"></el-avatar>
        <span style="padding-top:20px;float:right">{{user.user_pet_name}}</span>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-user">个人中心</el-dropdown-item>
        <el-dropdown-item icon="el-icon-key">修改密码</el-dropdown-item>
        <el-dropdown-item icon="el-icon-remove-outline">退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
  import SettingSpace from "@/eui/system/unit/SettingSpace";
  export default {
    components: {
      SettingSpace,
    },
    data() {
      return {
        value: "",
        show_music_space: false,
        user: {
          user_pet_name: "EuiAdmin",
          user_avatar_url: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
        },
        aside_state: false,
        fullscreen: false, //全屏状态
      };
    },
    methods: {
      change_aside_state() { //左侧菜单控制
        this.aside_state = !this.aside_state;
        this.$emit("input", this.aside_state);
      },
      message() { //点击信息按钮时跳转
        this.$router.push("/page/message/list");
      },
      search() { //搜索信息
        alert(this.value);
      },
      change_full_screen() {
        //全屏切换函数
        let element = document.documentElement;
        if (this.fullscreen) {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
        } else {
          if (element.requestFullscreen) {
            element.requestFullscreen();
          } else if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
          } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
          } else if (element.msRequestFullscreen) {
            // IE11
            element.msRequestFullscreen();
          }
        }
        this.fullscreen = !this.fullscreen; //判断全屏状态
      },
    },
  };
</script>
<style scoped>
  .el-menu {
    /* 去除底部边框线 */
    border-bottom: 0 !important;
  }

  #right {
    float: right;
    padding-top: 20px;
    margin-right: 10px;
    cursor: pointer;
    font-size: 120%;
  }
</style>