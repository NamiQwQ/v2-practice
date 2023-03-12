<template>
    <div>
        <el-container>
            <el-aside width="200px">
                <common-aside></common-aside>
            </el-aside>
            <el-container>
                <el-header>
                    <common-header></common-header>
                </el-header>
                <el-main>
                    <!-- 路由出口 -->
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
  
<script>
import CommonAside from "@/components/CommonAside.vue"
import CommonHeader from "@/components/CommonHeader.vue"
export default {
    components: {
        CommonAside,
        CommonHeader,
    }
}
</script>
  
<style lang="scss" scoped>
.el-header {
    padding: 0;
}
</style>