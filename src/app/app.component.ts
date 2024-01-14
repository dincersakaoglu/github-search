import { Component } from '@angular/core';
import { DataService } from '../services/DataService';
import { ReposComponent } from './repos.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Search Github Profiles from Angular Application';
constructor(private service:DataService){
  this.Username = "";
}
  User:any;
  Repos:any;
  private _Username!: string;
  public get Username() : string {
    return this._Username;
  }
  public set Username(v : string) {
    this._Username = v;
  }
    
  public GetUserDetail(){
this.service.GetUserDetail(this.Username)
.subscribe(result => this.User = result,
  err => console.log(err),
  ()=> this.service.GetUserRepos(this.User.repos_url)
  .subscribe(response => this.Repos = response,
    err=> console.log(err),
    ()=> console.log("All Repos loaded."))
  )
  } 
  public alertMessage($event: string) {
    alert("[" + this.User.bio + "]:" + $event);
  }
}
