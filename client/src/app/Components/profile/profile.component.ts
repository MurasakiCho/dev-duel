import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() imgSrc: string = ""
  @Input() bio: string = ""
  
  constructor() { }

  ngOnInit(): void {
  }

}
