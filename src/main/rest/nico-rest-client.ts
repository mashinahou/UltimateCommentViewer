import IRestClient from "./i-rest-client";
import HttpSupport from "../http-support";
import NicoApi from "../common/nico-api";
import NicoLiveHtmlParser from "../../renderer/html/nico-live-html-parser";
import {ipcRenderer} from 'electron';
export class NicoRestClient implements IRestClient{

    async getWebSocketUrlAsync(id: string): Promise<string|null> {
        const html = await HttpSupport.WrapGetAsync(NicoApi.getLiveUrl(id));
        if(html === null) return null;

        return html;
    }

}