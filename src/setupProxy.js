
if(process.env.NODE_ENV === "development") {
    const {createProxyMiddleware} = require("http-proxy-middleware");
    module.exports = function (app) {
        app.use(createProxyMiddleware("/api", {target: "http://localhost:5001/"}));
        app.use(createProxyMiddleware("/auth", {target: "http://localhost:5001/"}));
    };
}