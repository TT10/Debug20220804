import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'other-stuff',
    templateUrl: './other-stuff.component.html',
  styles: [
  ]
})
export class OtherStuffComponent implements OnInit {

    constructor(private route: ActivatedRoute, private router: Router) { }

    ngOnInit(): void {
        const stuffId: number = Number(this.route.snapshot.paramMap.get('id'));
  }

}
