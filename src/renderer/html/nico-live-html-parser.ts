import DataPropsJsonModel = namespace.DataPropsJsonModel;
import JsonConverter from "../../main/json/json-converter";
import BeautifulDom from 'beautiful-dom';

export default class NicoLiveHtmlParser{
    private dataProps: DataPropsJsonModel | null;
    constructor(htmlStr: string) {
        this.dataProps = NicoLiveHtmlParser.CreateDataProps(htmlStr);
    }
    GetSessionWebSocketUrl(): string|null{
        return this.dataProps?.site.relive.webSocketUrl || null;
    }

    private static CreateDataProps(htmlStr: string): DataPropsJsonModel | null{
        const p = new BeautifulDom(htmlStr);
        console.log(p.querySelector('#embedded-data'));

        return null;
        // FIXME: 下記がうまく動かなかったのでコメントアウト by mashinahou
        // const element = p.querySelector('#embedded-data');
        // if(element === null) return null;

        // const dataPropsJson = element.getAttribute('data-props')
        // if(dataPropsJson === null) return null;

        // return JsonConverter.convertToJsonModel<DataPropsJsonModel>(dataPropsJson);
    }
}
