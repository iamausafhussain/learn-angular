import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { HomeComponent } from 'src/components/home/home.component';
import { AzureComponent } from 'src/components/azure/azure.component';
import { NotFoundComponent } from 'src/components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AzureComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgxDocViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
