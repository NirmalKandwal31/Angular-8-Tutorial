import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../article';
import { ArticlesService } from '../articles.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: Article = null;
  constructor(private route: ActivatedRoute,
              private articleService: ArticlesService,
              private router: Router,
              private titleService: Title,
              private sharedService:SharedService,
              private meta: Meta) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // this.article = new Article();
      // this.article.key = params.key;
      const key = params.key;
      this.articleService.getArticle(key).subscribe(article => {
        if (article === undefined) {
          this.router.navigateByUrl('404');
        }
        this.article = article;
        // console.log(this.article);
        this.titleService.setTitle(`${this.article.title}-${this.sharedService.blogTitle}`);
        this.meta.addTags([
          {name:'description' , content: this.article.description},
          {property:'og:title' , content: `${this.article.title}-${this.sharedService.blogTitle}`},
          {property:'og:type' , content: "website"},
          {property:'og:url' , content: this.sharedService.baseUrl + this.article.key},
          {property:'og:image' , content: this.article.imageUrl},
          {property:'og:description' , content: this.article.description},
          {property:'og:site_name' , content: this.sharedService.baseUrl+this.article.key},
        ])
      });
    })
  }

}
