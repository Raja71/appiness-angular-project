import { Component, OnInit, ViewChild } from '@angular/core';
import { GithubUsersService } from 'src/app/services/github-users.service';
import { FormBuilder } from '@angular/forms';
import { fromEvent } from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: any[] =[]
  isLoading: boolean = false
  searchUser: any
  userid: any
  message: any
  @ViewChild('addRef', {static: true}) addRef: any 
  
  constructor(private usersService: GithubUsersService,
    private _fb: FormBuilder) { }

  ngOnInit() {
    this.getAllUsers()
    this.searchUser = this._fb.group({
      'userid': ['']
    })

    fromEvent(this.addRef.nativeElement, 'keyup')
      .pipe(
        map((k: any) => k.target.value),
        debounceTime(600),
      ).subscribe(val => {
        this.userid = val
        if (this.userid !== ''  && this.userid.length >= 3) {
          this.getUserByUserId(this.userid)
        } else {
          this.getAllUsers()
        }
      }
    )
  }

// getting all user when application loads
getAllUsers() {
  this.isLoading = true

  this.usersService.getAllGitHubUsers(25).then((data) => {
    if(data) {
      this.users = [data]
    this.usersService.changeMessage("Hiiii  GitHubUser")
      this.isLoading = false
    } else {
      this.isLoading = false
    }
  })
}

//function to search by passing userid
getUserByUserId(userid) {
  this.isLoading = true
  if(this.searchUser.value.userid.trim()) {
    this.users = []
    this.usersService.getUserRepos(this.searchUser.value.userid.trim()).then((data) => {
      if(data !== "") {
          this.users = [[data[0].owner]]
          this.isLoading = false
        } else {
        this.message = "No user found"
          this.isLoading = false
       }
     })
   }
  }
}
