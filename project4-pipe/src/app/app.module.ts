import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CapitalizePipe } from './pipe/capitalize.pipe';
import { SortPipe } from './pipe/sort.pipe';
import { SummaryPipe } from './pipe/summary.pipe';
import { CategoryPipe } from './pipe/category.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe,
    SortPipe,
    SummaryPipe,
    CategoryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
