import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashListComponent } from './dash-list/dash-list.component';
import{HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { DashAddComponent } from './dash-add/dash-add.component'
import { TokenInterceptor } from './service/token.interceptor';
import { SearchFilterPipe } from './service/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashListComponent,
    DashAddComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
