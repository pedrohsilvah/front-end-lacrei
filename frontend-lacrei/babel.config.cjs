module.exports = {
    presents: [
        ['@babel/present-env', {targets: {esmodules: true} }],
        ['@babel/present-react', {runtime: 'automatic' }],
        '@babel/preset-typescript'
    ],
}