import { Component, OnInit } from '@angular/core';

import { DataService, Lancamento } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public title: string = 'Home';
  notes: Lancamento[] = [];
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getLancamentos().subscribe(res => {
      this.notes = res;
    });
  }

}
