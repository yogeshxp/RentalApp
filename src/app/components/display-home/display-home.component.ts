import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-home',
  templateUrl: './display-home.component.html',
  styleUrls: ['./display-home.component.scss']
})
export class DisplayHomeComponent implements OnInit {

  FullName:any;

  constructor() { }

  ngOnInit(): void {
    this.FullName = localStorage.getItem('FullName');
    console.log(this.FullName)
  }

}
