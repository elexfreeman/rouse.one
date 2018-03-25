export class Usettings {
    public restServer: string = 'http://rouse.one/';
    private _apiKey: string;

    public telegramBot: string = 'jarvis_oberon_bot';

    constructor() {

    }

    /*выадет апкей*/

    /*запрашиваем с локального хранилища*/
    get apiKey(): string {
        this._apiKey = localStorage.getItem('apiKey');
        return this._apiKey;
    }

    /*записываем apikey в локальный стораж*/

    set apiKey(value: string) {
        if(value==null){
            localStorage.removeItem('apiKey');
        } else {
            localStorage.setItem('apiKey', value);
            this._apiKey = value;
        }

    }
}



