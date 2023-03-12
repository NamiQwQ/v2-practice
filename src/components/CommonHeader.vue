<template>
    <div class="header-container">
        <div class="l-content">
            <el-button icon="el-icon-menu" @click="" mini></el-button>
            <!-- 面包屑 -->
            <span class="text">面包屑</span>
        </div>
        <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img src="../assets/images/photo1.jpg">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
    name: "CommonHeader",
    methods: {
        handleMenu () {
            this.$store.commit('collapseMenu')
        }
    }
}
</script>

<style lang="scss" scoped>
.header-container {
    padding: 0 20px;
    background-color: #333;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .text {
        color: #fff;
        font-size: 14px;
        margin-left: 10px;
    }

    .el-dropdown-link {
        cursor: pointer;
        color: #409EFF;

        >img {
            width: 40px;
            height: 40px;
            border-radius: 20px;
            vertical-align: middle;
        }
    }

    .el-icon-arrow-down {
        font-size: 12px;
    }
}
</style>