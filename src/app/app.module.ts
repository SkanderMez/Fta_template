import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TeamsComponent } from './teams/teams.component';
import { TablePointComponent } from './table-point/table-point.component';
import { ResultsComponent } from './results/results.component';
import { PlayersComponent } from './players/players.component';
import { RegisterComponent } from './register/register.component';
import { SingleNewsComponent } from './single-news/single-news.component';
import { SinglePlayerComponent } from './single-player/single-player.component';
import { FixturesComponent } from './fixtures/fixtures.component';
import { GroupsComponent } from './groups/groups.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SitemapComponent } from './sitemap/sitemap.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    AboutUsComponent,
    TeamsComponent,
    TablePointComponent,
    ResultsComponent,
    PlayersComponent,
    RegisterComponent,
    SingleNewsComponent,
    SinglePlayerComponent,
    FixturesComponent,
    GroupsComponent,
    HomeComponent,
    ContactUsComponent,
    SitemapComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
