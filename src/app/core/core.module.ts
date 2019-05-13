
import { NgModule } from '@angular/core';
import { ProductionService, MawiService, VeveService } from './services';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CustomInterceptor } from './interceptors/credentials.interceptor';

@NgModule({
    declarations: [
    ],
    imports: [

    ],
    exports: [

    ],
    providers: [
        ProductionService,
        MawiService,
        VeveService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: CustomInterceptor,
            multi: true
        }
    ]
})
export class CoreModule { }
