const { createProxyMiddleware } = require("http-proxy-middleware")


module.exports = app => {
    app.use(
        createProxyMiddleware('/Stage/process_input', {
            target: 'https://xa5xgz9rgd.execute-api.us-east-1.amazonaws.com',
            changeOrigin: true
        })
    )
}


/* const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  };
  app.use(allowCrossDomain); */