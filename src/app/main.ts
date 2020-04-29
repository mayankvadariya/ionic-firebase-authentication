import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//This is the new change
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
