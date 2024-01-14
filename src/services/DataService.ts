import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url: string = 'https://api.github.com/users/';

@Injectable({providedIn: 'root'})
export class DataService {
    constructor(private httpClient: HttpClient) { }
     
    public GetUserDetail(name:string){
        return this.httpClient.get(url+name)
    }
    public GetUserRepos(url:string){
        return this.httpClient.get(url);
         
    }
} 