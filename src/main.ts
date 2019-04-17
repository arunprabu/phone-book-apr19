import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//Step2: Every ng app shpuld be bootstrapped with a Module, it is appModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
