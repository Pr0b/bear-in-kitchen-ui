import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AuthGuard} from './shared';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AuthService} from './shared/services';

export function createTranslateLoader(http: HttpClient) {
  // for development
  // return new TranslateHttpLoader(http, '/start-angular/SB-Admin-BS4-Angular-5/master/dist/assets/i18n/', '.json');
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    HttpModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
