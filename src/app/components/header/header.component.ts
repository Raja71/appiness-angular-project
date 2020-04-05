import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubUsersService } from 'src/app/services/github-users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
userName: any

  constructor(private usersService: GithubUsersService) {

   }

  ngOnInit() {
    //taking clicked name and displying in header bar
    this.usersService.currentMessage.subscribe(userName => this.userName = userName )
  }

}
