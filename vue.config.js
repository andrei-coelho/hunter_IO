module.exports = {

    pages: {
        
        index: 'src/pages/app.js',

        home: {
            optimization: {
                splitChunks: {
                  chunks: 'all',
                },
              },
            entry:    'src/pages/app.js',
            template: 'public/app.html',
            filename: 'app.html',
            chunks: ['chunk-vendors', 'chunk-common', 'app', 'vendor']
        },

        login: {
            optimization: {
                splitChunks: {
                  chunks: 'all',
                },
              },
            entry:    'src/pages/login.js',
            template: 'public/login.html',
            filename: 'login.html',
            chunks: ['chunk-vendors', 'chunk-common', 'login', 'vendor']
        },
        
    },


    publicPath: process.env.NODE_ENV === 'development' ? '' : '{__URL__}',

}