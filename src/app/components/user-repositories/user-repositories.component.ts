import { Component, OnInit } from '@angular/core';
import { GithubUsersService } from 'src/app/services/github-users.service';
import { ActivatedRoute } from '@angular/router';
import { Title } from "@angular/platform-browser"

@Component({
  selector: 'app-user-repositories',
  templateUrl: './user-repositories.component.html',
  styleUrls: ['./user-repositories.component.css']
})

export class UserRepositoriesComponent implements OnInit {

  repositories: any[] = []
  isLoading: boolean = false
  ownerInfo: any[] = []
  message: any

  constructor(private usersService: GithubUsersService,
    private router: ActivatedRoute,
    private titleService: Title) { }

  ngOnInit() {
    //this is used to capture the userid
    let userid = this.router.snapshot.params.userid;
    if(userid) {
      this.isLoading = true
      //getting user repos by calling this service
      this.usersService.getUserRepos(userid).then((data: any) =>{
        if(data.length > 0) {
          this.repositories = [data]
          this.ownerInfo = [data[0].owner]
          this.usersService.changeMessage("Hiiii  "+data[0].owner.login)
          this.titleService.setTitle(data[0].owner.login)
          this.isLoading = false
        } else {
          this.message = "no repositor found"
          this.isLoading = false
        }
        })
    }
  }
}
