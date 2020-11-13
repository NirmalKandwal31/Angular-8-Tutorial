import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavFooterComponent } from './nav-footer/nav-footer.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { AboutComponent } from './about/about.component';
import { ArticlesService } from './articles.service';
import { ArticleComponent } from './article/article.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [	
    AppComponent,
    NavBarComponent,
    NavFooterComponent,
    ArticleListComponent,
    AboutComponent,
    ArticleComponent,
      NotFoundComponent,
   ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ArticlesService,SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
