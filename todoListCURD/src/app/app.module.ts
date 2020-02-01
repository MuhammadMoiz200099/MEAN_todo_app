import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// request 
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { HttpErrorHandlerService } from "./services/httpErrorHandler/http-error-handler.service";
import { MessageService } from "./services/message/message.service";

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    MessageService,
    HttpErrorHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
