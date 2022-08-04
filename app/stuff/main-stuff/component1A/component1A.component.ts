import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'component1A',
    templateUrl: './component1A.component.html',
  styles : []})
export class Component1A implements OnInit {

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit(): void {
    }
}
