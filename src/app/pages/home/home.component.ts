import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { HttpService } from "../../services/http.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  page = 1;
  group = 2;
  data$!: Observable<any>;

  constructor(private router: Router, private activeRoute: ActivatedRoute, public http:HttpService) {
  }

  ngOnInit(): void {
    if(!this.activeRoute.snapshot.queryParams?.page){
      this.router.navigate([], {queryParams: {group: this.group, page: this.page}, queryParamsHandling: 'merge'});
    } else {
      this.page = this.activeRoute.snapshot.queryParams.page;
      this.group = this.activeRoute.snapshot.queryParams.group;
    }

    this.data$ = this.http.getPageData(this.group, this.page);
  }

}
