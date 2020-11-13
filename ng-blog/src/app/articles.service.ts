import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from './article';
//import { MockArticles } from './mock-articles';

@Injectable()
export class ArticlesService {

    constructor(
        private http:HttpClient
    ) { }

    getArticles(): Observable<Article[]> {
       // const articles: Article[] = MockArticles;   These two line of code are used when we want hard code data from class file
        // return of(articles); // check of
        return this.http.get<Article[]>("http://localhost:8000/articles");




    }
    getArticle(key: string): Observable<Article> {
        //const articles: Article[] = MockArticles.filter(a => a.key === key);
       // return of(articles[0]); // check of
       return this.http.get<Article>("http://localhost:8000/articles/"+ key);
    }

}
