import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk';
import { FF4JService } from 'app/app.service';
import { Feature, User } from 'app/app.model';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  dataSource: FF4JDataSource;
  featureList = ['test1', 'test2', 'test3'];
  displayedColumns = ['userId', 'test1', 'test2', 'test3'];

  constructor(private ff4jService: FF4JService) { }

  ngOnInit() {
    this.dataSource = new FF4JDataSource(this.ff4jService);
  }

  isSlideToggleChecked(): boolean {
    return true;
  }
}

export class FF4JDataSource extends DataSource<any> {
  constructor(private ff4jService: FF4JService) {
    super();
  }

  connect(): Observable<Array<User>> {
    return this.ff4jService.getAllFeatures();
  }

  disconnect() {}
}