import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablesComponent } from './tables/tables.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { EffectubeComponent } from './effectube/effectube.component';
import { ChartComponent } from './chart/chart.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { WebsiteComponent } from './website/website.component';




@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    EffectubeComponent,
    ChartComponent,
    WebsiteComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HighchartsChartModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
