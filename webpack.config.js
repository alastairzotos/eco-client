const path = require('path');

const { readdirSync, statSync } = require('fs');

const srcDir = path.resolve(__dirname, 'src');

const parseModulesToAlias = (p) =>
  readdirSync(p)
    .filter((f) => statSync(`${p}/${f}`).isDirectory())
    .reduce((dirs, current) => ({
      ...dirs,
      [`~${current}`]: path.resolve(__dirname, `${p}/${current}`),
    }), {});

module.exports = {
    mode: 'development',

    entry: {
        index: path.resolve(__dirname, 'src/index.ts'),
    },

    devServer: {
        historyApiFallback: true,
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            experimentalWatchApi: true,
                        }
                    }
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            }
        ],
    },

    optimization: {
        removeAvailableModules: false,
        removeEmptyChunks: false,
        minimize: false,
        splitChunks: false
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.css'],
        alias: {
            '~': srcDir,
            ...parseModulesToAlias(`${srcDir}/modules`),
        }
    },

    // plugins,

    output: {
        filename: '[name].js',
        pathinfo: false,
        path: path.resolve(__dirname, 'dist'),
        library: '@ecocms/client',
        libraryTarget: 'umd'
    },
};
