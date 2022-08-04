import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1A } from './main-stuff/component1A/component1A.component';
import { StuffService } from './stuff.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Component1B } from './main-stuff/component1B/component1B.component';
import { RouterModule, Routes } from '@angular/router';
import { OtherStuffComponent } from './other-stuff/other-stuff.component';
import { MainStuffComponent } from './main-stuff/main-stuff.component';

const routes: Routes = [
    { path: 'otherStuff/:id', component: OtherStuffComponent },
	{ path: '', component: MainStuffComponent }
];

@NgModule({
  declarations: [
        Component1A,
        Component1B,
        OtherStuffComponent,
        MainStuffComponent
  ],
  imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      RouterModule.forChild(routes)
    ],
    providers: [
        StuffService
    ]
})
export class StuffModule {}
