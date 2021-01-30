export default interface IRestClient{
    getWebSocketUrlAsync(id:string): Promise<string|null>
}