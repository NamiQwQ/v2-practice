<template>
    <div>
        <template v-if="loginType === 'username'">
            <label>Username</label>
            <input placeholder="Enter your username" key="username-input">
        </template>
        <template v-else>
            <label>Email</label>
            <input placeholder="Enter your email address" key="email-input">
        </template>
        <button @click="ChangeType">切换登陆方式</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            loginType: " "
        }
    },
    methods: {
        ChangeType () {
            if (this.loginType === 'username') {
                this.loginType = "Email"
            } else {
                this.loginType = 'username'
            }
        }
    }
}
</script>

<style lang="scss" scoped></style>