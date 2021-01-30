import { AxiosResponse } from "axios";

export default interface IRestClient{
    getWebSocketUrlAsync(id:string): Promise<AxiosResponse<string> | null>
}
