<template>
    <el-radio-group v-model="theme" @change="set_theme">
        <el-radio v-for="(theme,index) in theme_data" :key="index" :label="theme.link">{{theme.title}}</el-radio>
    </el-radio-group>
</template>
<script>
    export default {
        data() {
            return {
                theme:'./style/eui_default/index.css',
                theme_data: [{
                        title: '暗色主题',
                        link: './style/eui_dark/index.css'
                    },
                    {
                        title: '默认主题',
                        link: './style/eui_default/index.css'
                    },
                ]
            }
        },
        methods: {
            set_theme(theme) {
                this.theme=theme
                // console.log(theme);
                document.getElementById("themeLinkId").href = theme
                sessionStorage.setItem('theme_link', theme)
                this.$message.success('应用主题成功')
                this.$emit('change_theme',false)
            }
        },
        mounted() {
            if (sessionStorage.getItem('theme_link')!=null) {
                this.theme=sessionStorage.getItem('theme_link')
            }
        }
    }
</script>