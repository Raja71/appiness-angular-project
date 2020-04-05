
import { Injectable, Optional, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { APP_BASE_HREF, isPlatformBrowser } from '@angular/common';
import { Meta } from '@angular/platform-browser';
import { OnlineOfflineService } from './online-offline.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { GithubBaseService } from './github-base.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GithubUsersService {
  isOnline: boolean
  url: any

  private API_URL = 'https://api.github.com/users'

private messageSource = new BehaviorSubject("")
currentMessage = this.messageSource.asObservable()
  constructor(private http: HttpClient,
    private GithubBaseService: GithubBaseService,
    private meta: Meta,
    private onlineOfflineService: OnlineOfflineService,
    private router: Router) {

    if (origin)
      this.API_URL = `${origin}${this.API_URL}`;

      this.isOnline = window.navigator.onLine
      onlineOfflineService.connectionChanged.subscribe(online => {
        this.isOnline = online
        if (online) {
          window.location.reload()
        } else {
          console.log('went offline')
        }
      })
  }

//user name of gituser diplying in header
changeMessage(username: string) {
  this.messageSource.next(username)
}
//getting all users
  getAllGitHubUsers(pageNumber: any) {
    const promise = new Promise((resolve,reject) => {
      this.http.get<any>('https://api.github.com/users?since='+pageNumber+'/?access_token=' + environment.apiUrl).toPromise().then(response => {
        resolve(response)
      },error => {
        reject(error)
      })
    })
    return promise
  }

  //getting repositors for perticular user
  getUserRepos(userid: any) {
    const promise = new Promise(((resolve,reject) => {
      this.http.get<any>('https://api.github.com/users/'+userid+'/repos?access_token=' + environment.apiUrl).toPromise().then(response => {
        resolve(response)
      },error => {
        reject(error)
      })
    }))
    return promise
  }

}
