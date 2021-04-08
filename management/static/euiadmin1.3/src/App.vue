<template>
  <div id="app">
    <router-view v-if="!$route.meta.inside" />
    <el-container id="aside" v-if="$route.meta.inside" style="height: 100vh;">
      <AsideSpace :menu_state="aside_state" />
      <el-container>
        <el-header :height="head_height" id="container_head">
          <HeadSpace v-model="aside_state" />
        </el-header>
        <el-main id="container_main">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
  export default {
    components: {
      HeadSpace: (resolve) => {
        require(["@/eui/system/HeadSpace"], resolve);
      }, //顶部菜单
      AsideSpace: (resolve) => {
        require(["@/eui/system/AsideSpace"], resolve);
      }, //左侧菜单
    },
    data() {
      return {
        tab_data: [],
        aside_state: false,
      };
    },
    methods: {},
    mounted() {
      if (sessionStorage.getItem('theme_link') != null) {
        document.getElementById("themeLinkId").href = sessionStorage.getItem('theme_link')
      }
    },
    watch: {
      // $route() {
      //   this.tabs_state = false;
      //   setTimeout(() => {
      //     this.tabs_state = true;
      //   }, 5);
      // },
    },
  };
</script>