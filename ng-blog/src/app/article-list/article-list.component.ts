import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Article } from '../article';
import { ArticlesService } from '../articles.service';
//import { MockArticles } from '../mock-articles';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles: Article[] = [];
  constructor(private articleService: ArticlesService,
    private titleService: Title,
    private sharedService:SharedService) { }

  ngOnInit(): void {
    this.titleService.setTitle(`${this.sharedService.blogTitle}`);
    // this.articles = MockArticles;
    // console.log(this.articles);
    this.getArticles();
  }
  getArticles(): void {
    this.articleService.getArticles().subscribe(articles => (this.articles = articles));
  }
}
