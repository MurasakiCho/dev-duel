import { Component, Input, OnInit } from '@angular/core';
import { response } from 'express';
import { UserService } from 'src/user.service';
import { Profile } from '../Interfaces/Profile';
import { empty } from 'joi';

@Component({
  selector: 'app-inspect',
  templateUrl: './inspect.component.html',
  styleUrls: ['./inspect.component.css']
})
export class InspectComponent implements OnInit {

  username: string = ""
  public profiles: Profile | undefined

  constructor(private userService: UserService) { }

  ngOnInit() {

  }

  receiveUsername(valueEmitted: string) {
    this.username = valueEmitted;
  }

  onSubmit() {
    if(this.username != ""){

    this.userService.inspectUser(this.username)
    .subscribe( data => this.profiles = data);
    console.log(this.profiles)

    } else{
      alert("Enter a valid username")
    }
  }
}

