module.exports = {
    port: 3030,
    server: {
        baseDir: './public',
        middleware: {
            1: require('connect-history-api-fallback')({index: '/index.html', verbose: true})
        }
    }
};