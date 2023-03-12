const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {
    proxy: 'http://127.0.0.1:3007'
  },
  // devServer: {
  //   // host: '0.0.0.0',
  //   // // https:true,
  //   // port: 6103,
  //   // client: {
  //   //   webSocketURL: 'ws://0.0.0.0:6103/ws',
  //   // },
  //   // headers: {
  //   //   'Access-Control-Allow-Origin': '*',
  //   // }
  // },
  transpileDependencies: true
})
