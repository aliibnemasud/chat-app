const { createProxyMiddleware } = require("http-proxy-middleware")


module.exports = app => {
    app.use(
        createProxyMiddleware('/prod/process_input', {
            target: 'https://e63f4y64m4.execute-api.ap-south-1.amazonaws.com',
            changeOrigin: true
        })
    )
}