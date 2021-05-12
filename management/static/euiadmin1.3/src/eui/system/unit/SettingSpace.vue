<template>
  <!-- euiadmin颜色设置 -->
  <div>
    <i class="el-icon-more" @click="dialog_state = true" id="head_color_setting_icon" />
    <el-drawer size="400px" :visible.sync="dialog_state">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="主题设置" name="theme">
          <Theme @change_theme="change_theme"/>
        </el-tab-pane>
        <el-tab-pane label="网站设置" name="web"></el-tab-pane>
      </el-tabs>
    </el-drawer>
  </div>
</template>
<script>
  export default {
    components: {
      Theme: (resolve) => {
        require(["@/eui/system/unit/Theme"], resolve);
      },
    },
    data() {
      return {
        dialog_state: false,
        activeName: 'theme'
      };
    },
    methods: {
      change_theme(state){
        this.dialog_state=state
      }
    },
  };
</script>
<style>
  .el-drawer.rtl {
    overflow: scroll;
  }
</style>