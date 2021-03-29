<template>
    <el-progress :percentage="percentage" :status="status" :format="checkStrong"></el-progress>
</template>

<script>
    export default {
        props: ['password'],
        data() {
            return {
                percentage: 0,
                status: '',
            };
        },
        methods: {
            checkStrong() {
                var modes = 0;
                if (this.password == '') {
                    this.percentage = 0
                    modes=0
                }
                //正则表达式验证符合要求的
                if (this.password.length < 1) return modes;
                if (/\d/.test(this.password)) modes++; //数字
                if (/[a-z]/.test(this.password)) modes++; //小写
                if (/[A-Z]/.test(this.password)) modes++; //大写
                if (/\W/.test(this.password)) modes++; //特殊字符
                switch (modes) {
                    case 1:
                        this.status = 'exception'
                        break;
                    case 2:
                        this.status = 'warning'
                        break;
                    case 3:
                        this.status = 'exception'
                        break;
                    case 4:
                        this.status = 'success'
                        break;
                }
                this.$emit('input', modes)
                this.percentage = modes / 4 * 100
            }
        },
        watch: {
            password() {
                this.checkStrong(this.password)
            }
        }
    };
</script>