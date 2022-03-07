import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { CustomHtmlTagComponent } from './custom-html-tag/custom-html-tag.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentProjectionComponent,
    CustomHtmlTagComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
