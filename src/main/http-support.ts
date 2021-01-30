import axios from "axios";

export default class HttpSupport{
    private constructor() {
    }

    static async WrapGetAsync(url: string):Promise<string|null>{
        try{
            return await axios.get(url);
        }catch (e){
            console.log(e);
            return null;
        }
    }

}