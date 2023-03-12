<template>
    <div>
        <li v-for="n in evenNumbers">{{ n }}</li>
        <hr>
        <ul v-for="set in sets">
            <li v-for="n in even(set)">{{ n }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data () {
        return {
            numbers: [1, 2, 3, 4, 5],
            sets: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]
        }
    },
    computed: {
        evenNumbers: function () {
            return this.numbers.filter(function (number) {
                return number % 2 === 0
            })
        }
    },
    methods: {
        even: function (numbers) {
            return numbers.filter(function (number) {
                return number % 2 === 0
            })
        }
    }
}
</script>

<style lang="scss" scoped></style>