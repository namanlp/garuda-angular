import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public constructor(private titleService: Title) { }

  ngOnInit(){
    this.titleService.setTitle("Garuda Linux | About")
  }
}
