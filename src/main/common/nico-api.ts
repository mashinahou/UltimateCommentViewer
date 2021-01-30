export default class NicoApi{
    private constructor() {
    }
    static getLiveUrl(liveId:string):string{
       return `https://live2.nicovideo.jp/watch/${liveId}`;
    }
}