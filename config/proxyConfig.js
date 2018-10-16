module.exports = {
  	proxy: {
      '/webserviceProxy': {
      	target: 'http://192.168.19.187',//http://www.zgjky.cn http://192.168.18.152:8080
        //target: 'https://www.zgjky.cn',
        pathRewrite: {'^/webserviceProxy' : ''},
        changeOrigin: true
      },
      '/webapiProxy': {
      	target: 'http://192.168.19.189',//http://www.zgjky.cn http://192.168.18.152:8080
        //target: 'http://www.zgjky.cn',
        pathRewrite: {'^/webapiProxy' : ''},
        changeOrigin: true
      },
      '/websiteProxy': {
	      target: 'http://192.168.19.187',//http://www.zgjky.cn http://192.168.18.152:8080
        //target: 'http://www.zgjky.cn',
        pathRewrite: {'^/websiteProxy' : ''},
        changeOrigin: true
      },
      '/wbchatProxy': {
	      target: 'http://192.168.19.187',//http://www.zgjky.cn http://192.168.18.152:8080
        //target: 'http://www.zgjky.cn',
        pathRewrite: {'^/wbchatProxy' : ''},
        changeOrigin: true
      },
      '/wechatPayProxy': {
        target: 'http://219.142.225.69:8083',//http://www.zgjky.cn http://192.168.18.152:8080
        //target: 'http://www.zgjky.cn',
        pathRewrite: {'^/wechatPayProxy' : ''},
        changeOrigin: true
      },
      '/sftpayProxy': {
        target: 'https://cardpay.shengpay.com',//http://www.zgjky.cn http://192.168.18.152:8080
        //target: 'http://www.zgjky.cn',
        pathRewrite: {'^/sftpayProxy' : ''},
        changeOrigin: true
      }
    }
}