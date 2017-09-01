import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { ConfigService } from '@bizappframework/ng-config';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';

import { reducers, metaReducers } from './reducers';
import { AppComponent } from './app.component';

export const appId = 'ng_config_aspnetcore_sample';

// config factories
export function configAppInitializerFactory(configService: ConfigService): any {
    const res = () => configService.init();
    return res;
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      CommonModule,
      HttpModule,

      // ngrx
      StoreModule.forRoot(reducers, { metaReducers }),
      !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [
      ConfigService,
      {
          provide: APP_INITIALIZER,
          useFactory: (configAppInitializerFactory),
          deps: [ConfigService],
          multi: true
      }
  ]
})
export class AppSharedModule { }
