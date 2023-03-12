<template>
    <div class="commonAside">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
            :collapse="isCollapse" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :router="true">
            <h3>基础学习</h3>
            <el-menu-item index="/">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="/vuebasics">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">vue2基础</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="/vuebasics/instance">Vue实例</el-menu-item>
                    <el-menu-item index="/vuebasics/syntax">模板语法</el-menu-item>
                    <el-menu-item index="/vuebasics/computed">计算属性和侦听器</el-menu-item>
                    <el-menu-item index="/vuebasics/conditional">条件渲染</el-menu-item>
                    <el-menu-item index="/vuebasics/list">列表渲染</el-menu-item>
                    <el-menu-item index="/vuebasics/events">事件处理</el-menu-item>
                    <el-menu-item index="/vuebasics/forms">表单输入绑定</el-menu-item>
                    <el-menu-item index="/vuebasics/components">组件基础</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">vue2深入</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="">提高</el-menu-item>
                </el-menu-item-group>
            </el-submenu>

        </el-menu>
    </div>
</template>

<script>
export default {
    data () {
        return {
            // isCollapse: false
        };
    },
    methods: {
        handleOpen (key, keyPath) {
            // console.log(key, keyPath);
        },
        handleClose (key, keyPath) {
            // console.log(key, keyPath);
        }
    },
    computed: {
        isCollapse () {
            console.log(this.$store.state.tab.isCollapse);
            return this.$store.state.tab.isCollapse
        },
        //或者
        // ...mapState('tab', ['isCollapse'])
    }

}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 220px;
    min-height: 400px;
}

.commonAside {
    overflow: hidden;
    width: 200px;
}

.el-menu {
    height: 100vh;
    border-right: none;
    overflow-y: scroll;
    overflow-x: hidden;
    width: 220px;

    >h3 {
        color: #fff;
        text-align: center;
        line-height: 48px;
        font-size: 16px;
        font-weight: 400;
    }
}
</style>