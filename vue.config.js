module.exports = {
   publicPath:"woChu",
    devServer:{
        proxy:{
           "/api":{
               target:"http://api9.wochu.cn",
               changeOrigin:true,
           },
           "/client":{
            target:"http://api9.wochu.cn",
            changeOrigin:true,
        }

        }
    }
}