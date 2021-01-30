// webpack.config.js
const path = require("path");
module.exports = [{
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "development",
    target: "electron-renderer",
    entry: "./src/renderer/root/root.tsx",
    // 出力ファイル
    output: {
        path: path.join(__dirname, "/build"),
        filename: "index.js"
    },
    resolve: {
       extensions: ['.tsx','.jsx','.ts',".js"]
    },
    module: {
        rules: [
            {
                test: /.(tsx|ts)$/, // 拡張子がjsxで
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            {
                test: /.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, 'build')
    }
},
    {
        // モード値を production に設定すると最適化された状態で、
        // development に設定するとソースマップ有効でJSファイルが出力される
        mode: "development",
        target: "electron-main",
        entry: "./src/main/main.ts",
        // 出力ファイル
        output: {
            path: path.join(__dirname, "/build"),
            filename: "main.js"
        },
        resolve: {
            extensions: ['.tsx','.jsx','.ts',".js"]
        },
        module: {
            rules: [
                {
                    test: /.(ts)$/, // 拡張子がjsxで
                    exclude: /node_modules/,
                    use: ['ts-loader']
                },
            ]
        },

    }
]