import DataPropsJsonModel = namespace.DataPropsJsonModel;
import JsonConverter from "../../main/json/json-converter";
import BeautifulDom from 'beautiful-dom';

export default class NicoLiveHtmlParser{
    private dataProps: DataPropsJsonModel | null;
    constructor(html: string) {
        this.dataProps = NicoLiveHtmlParser.CreateDataProps(html);
    }
    GetSessionWebSocketUrl(): string|null{
        return this.dataProps?.site.relive.webSocketUrl || null;
    }

    private static CreateDataProps(html: string): DataPropsJsonModel | null{

        const p = new BeautifulDom(html);

        const element = p.querySelector('#embedded-data');
        if(element === null) return null;

        const dataPropsJson = element.getAttribute('data-props')
        if(dataPropsJson === null) return null;

        return JsonConverter.convertToJsonModel<DataPropsJsonModel>(dataPropsJson);
    }
}
