import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Poll } from './poll.models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollService {
  private baseurl="http://localhost:8080/api/polls";
  constructor(private http:HttpClient){

  }
  createPoll(poll:Poll):Observable<Poll>{
  return this.http.post<Poll>(this.baseurl,poll);
  }
  getPolls():Observable<Poll[]>{
return this.http.get<Poll[]>(this.baseurl);
  }
  vote(pollId:number,optionIndex:number):Observable<void>{
    const url = `${this.baseurl}/vote`;

   return  this.http.post<void>(url,{pollId,optionIndex})
  }
}
