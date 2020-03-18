import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.css']
})
export class PagenotfoundComponent implements OnInit {
  path:string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.data.pipe(take(1))
    .subscribe((data: { path: string }) => {
      this.path = data.path;
    });
  }

}
