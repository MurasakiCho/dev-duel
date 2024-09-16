import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() pfpUrl = ""
  @Input() bio =""
  @Input() username = ""
  @Input() name =""
  @Input() location=""
  @Input() titles=""
  @Input() favorite_language=""
  @Input() public_repos=""
  @Input() perfect_repos=""
  @Input() total_stars=""
  @Input() highest_starred=""
  @Input() followers=""
  @Input() following=""

  constructor() { }

  ngOnInit(): void {
  }

}
