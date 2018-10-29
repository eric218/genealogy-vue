module.exports = {
    lintOnSave: false,
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.json', '.vue'],
        },
    },
    baseUrl: process.env.NODE_ENV === 'production' ?
        '/dist/' : '/',
    productionSourceMap: true
};