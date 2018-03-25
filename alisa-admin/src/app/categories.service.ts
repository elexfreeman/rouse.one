import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Usettings} from "./usettings";

/*данные по котегории*/
export interface Category {
    id: number;
    caption: string;
    url: string;
    img: string;
    description: string;
    deleted: number;
}

@Injectable()
export class CategoriesService {

    /*конфиг с настройками*/
    settings: Usettings;

    constructor(private http: HttpClient) {
        /*получаем данные конфига*/
        this.settings = new Usettings();
    }

    genParamsString(data_check) {
        var res = '';
        for (let key in data_check) {
            res += key + '=' + data_check[key] + '&';
        }
        return res;
    }

    /*список всех кают корабеля*/
    getCategories(): Observable<Category[]> {
        return this.http.get<Category[]>(
            this.settings.restServer + 'admin/categories/getAll',
            {})
            .pipe();
    }

    /*список всех кают корабеля*/
    getCategory(categoryId: number): Observable<Category> {
        return this.http.post<Category>(
            this.settings.restServer + 'admin/categories/get',
            {
                id: categoryId
            })
            .pipe();
    }

    /*список всех кают корабеля*/
    addCategory(category: Category): Observable<JSON> {
        return this.http.post<JSON>(
            this.settings.restServer + 'admin/categories/add', category)
            .pipe();
    }

    /*список всех кают корабеля*/
    updateCategory(category: Category): Observable<JSON> {
        return this.http.post<JSON>(
            this.settings.restServer + 'admin/categories/update', category)
            .pipe();
    }

}
