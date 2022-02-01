import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Item } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public title: string = 'Home';
  notes: Item[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getLancamentos().subscribe(res => {
      this.notes = res;
    });
  }

}
