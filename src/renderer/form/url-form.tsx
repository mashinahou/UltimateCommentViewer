import React from "react";
import {ipcRenderer} from "electron";
import NicoLiveHtmlParser from "../html/nico-live-html-parser";

export  default class UrlForm extends  React.Component{
    async connectionServer(){
        const html =  await ipcRenderer.invoke('connect') as string;

        console.log(html);
    }

    render(){
        return(
            <div>
                <button onClick={async () =>await this.connectionServer()}>接続開始</button>
            </div>
        );
    }
}