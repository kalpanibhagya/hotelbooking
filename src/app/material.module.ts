import { NgModule } from '@angular/core';
import { MatBadgeModule } from '@angular/material';
import {MatButtonModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';


@NgModule({
    imports: [MatBadgeModule,
        MatButtonModule, MatSidenavModule, MatToolbarModule],
    exports: [ MatBadgeModule, MatButtonModule, MatSidenavModule , MatToolbarModule]
})

export class MaterialModule { }
