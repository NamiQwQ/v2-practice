<template>
    <div>
        <div id="example-2">
            <!-- `greet` 是在下面定义的方法名 -->
            <button v-on:click="greet">Greet</button>
        </div>

        <div id="example-3">
            <button v-on:click="say('hi')">Say hi</button>
            <button v-on:click="say('what')">Say what</button>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            name: 'Vue.js'
        }
    },
    // 在 `methods` 对象中定义方法
    methods: {
        greet: function (event) {
            // `this` 在方法里指向当前 Vue 实例
            alert('Hello ' + this.name + '!')
            // `event` 是原生 DOM 事件
            if (event) {
                alert(event.target.tagName)
            }
        },
        say: function (message) {
            alert(message)
        }
    }
}
</script>

<style lang="scss" scoped></style>