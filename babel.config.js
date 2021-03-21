module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: false,
                bugfixes: true,
            },
        ],
        [
            '@babel/preset-react',
            {
                runtime: 'automatic',
            },
        ],
    ],
    plugins: ['@babel/plugin-transform-runtime', "@compiled/babel-plugin"],
}
