import axios from "axios";

export default class HttpSupport{
    private constructor() {
    }

    static async WrapGetAsync(url: string) {
        try{
            // REVIEW: ここが原因でした。
            // axios.getの戻り方はstringではないです。
            // @types/axiosで型定義ファイルを追加しています。
            return await axios.get<string>(url)
        }catch (e){
            return null;
        }
    }

}
