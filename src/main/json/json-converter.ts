export default class JsonConverter{
    private constructor() {
    }

    static convertToJsonModel<T>(json: string): T{
        return JSON.parse(json) as T;
    }
}