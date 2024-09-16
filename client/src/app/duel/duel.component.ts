import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/user.service';
import { Profile } from '../Interfaces/Profile';
import { number } from 'joi';

@Component({
  selector: 'app-duel',
  templateUrl: './duel.component.html',
  styleUrls: ['./duel.component.css']
})
export class DuelComponent implements OnInit {
  usernameOne: string = ""
  usernameTwo: string = ""

  profiles: Profile[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  receiveUsernameOne(valueEmitted: string) {
    this.usernameOne = valueEmitted;
  }

  receiveUsernameTwo(valueEmitted: string) {
    this.usernameTwo = valueEmitted;
  }

  onSubmit() {
    if(this.usernameOne !="" && this.usernameTwo != ""){
    this.userService.duelUsers(this.usernameOne, this.usernameTwo)
      .subscribe((profiles) => {
        this.profiles = profiles
      })
    } else{
      alert("Enter a valid username")
    }
    
  }
}
