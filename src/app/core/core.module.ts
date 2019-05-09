
import { NgModule } from '@angular/core';
import { ProductionService } from './services';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomInterceptor } from './interceptors/credentials.interceptor';

@NgModule({
    imports: [

    ],
    exports: [
        ProductionService
    ],
    providers: [
        ProductionService,
        // {
        //     provide: HTTP_INTERCEPTORS,
        //     useClass: CustomInterceptor,
        //     multi: true
        // }
    ]
})
export class SharedModule { }
