import {NicoRestClient} from "./rest/nico-rest-client";
import NicoApi from "./common/nico-api";
import NicoLiveHtmlParser from "../renderer/html/nico-live-html-parser";

const {app, BrowserWindow, ipcMain} = require('electron');



function createWindow() {
    // メインウィンドウを作成します
    let mainWindow= new BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
        },
        width: 800, height: 900,
    });

    // メインウィンドウに表示するURLを指定します
    // （今回はmain.jsと同じディレクトリのindex.html）
    mainWindow.loadURL('http://localhost:8080/');

    // デベロッパーツールの起動
    mainWindow.webContents.openDevTools();

    // メインウィンドウが閉じられたときの処理

}

//  初期化が完了した時の処理
app.on('ready', createWindow);

// 全てのウィンドウが閉じたときの処理
app.on('window-all-closed', () => {
    // macOSのとき以外はアプリケーションを終了させます
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

ipcMain.handle('connect',   async () => {
    const rest = new NicoRestClient();
    //
    //　視聴ページのHTMLを取得してきている
    const response = await rest.getWebSocketUrlAsync("lv330267235")

    //ここでHTMLを渡すとtypeErrorが発生している
    const parser = new NicoLiveHtmlParser(response?.data ?? '');

    // FIXME: parser.GetSessionWebSocketUrlが
    // うまく動かなかったのでデバッグだけのために改造しています。
    // by mashinahou
    const url = parser.GetSessionWebSocketUrl();
    console.log(url);
    return url;
});
