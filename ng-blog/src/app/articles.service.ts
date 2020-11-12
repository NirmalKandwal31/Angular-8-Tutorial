import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Article } from './article';
import { MockArticles } from './mock-articles';

@Injectable()
export class ArticlesService {

    constructor() { }

    getArticles(): Observable<Article[]> {
        const articles: Article[] = MockArticles;
        return of(articles); // check of

    }
    getArticle(key: string): Observable<Article> {
        const articles: Article[] = MockArticles.filter(a => a.key === key);
        return of(articles[0]); // check of

    }

}
