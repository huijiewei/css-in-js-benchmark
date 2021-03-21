const path = require('path');

const workspaceRoot = path.resolve(__dirname, '../');

process.env.NODE_ENV = 'production';

module.exports = {
    context: workspaceRoot,
    entry: './browser/index.js',
    mode: 'production',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    configFile: path.join(workspaceRoot, 'babel.config.js'),
                },
            },
            {
                test: /\.(jpg|gif|png)$/,
                type: 'asset',
            },
        ],
    },
    resolve: {
        alias: {
            'react-dom$': 'react-dom/profiling',
            'scheduler/tracing': 'scheduler/tracing-profiling',
        },
        extensions: ['.js', '.ts', '.tsx'],
    },
};
