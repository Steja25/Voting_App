import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service';
import { Poll } from '../poll.models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-poll',
  templateUrl: './poll.html',
  styleUrls: ['./poll.css'],
  imports: [CommonModule,FormsModule]
})
export class PollComponent implements OnInit {
  newPoll:Poll ={
    id:0,
    question:'',
    options:[{optionText:'',voteCount:0},
      {optionText:'',voteCount:0}]

  };
  polls: Poll[] = [];

  constructor(private pollService: PollService) {}

  ngOnInit(): void {
    this.loadPolls();
  }

  loadPolls(): void {
    this.pollService.getPolls().subscribe({
      next: (data) => {
        this.polls = data;
      },
      error: (error) => {
        console.error('Error fetching polls:', error);
      }
    });
  }
  reset(){
    this.newPoll ={
    id:0,
    question:'',
    options:[{optionText:'',voteCount:0},
      {optionText:'',voteCount:0}]

  };
  }
  
  trackByIndex(index:number):number{
    return index;
  }
  createPoll() {
    const pollToSend = {
    question: this.newPoll.question,
    options: this.newPoll.options
  };
    
    
  this.pollService.createPoll(pollToSend as any).subscribe({
    next: (createdPoll) => {
      this.polls.push(createdPoll);  // add new poll to list
      this.reset();                  // clear form
    },
    error: (error) => {
      console.error("Error creating poll:"+ error);
    }
  });
}
vote(pollId:number,optionIndex:number){
    this.pollService.vote(pollId,optionIndex).subscribe({
      next: () => {
      const poll=this.polls.find(p=> p.id===pollId)  
      if(poll){
        poll.options[optionIndex].voteCount++;
      }               // clear form
    },
    error: (error) => {
      console.error("Error voting a poll:"+ error);
    }
    })

  }
  addOption(){
    this.newPoll.options.push({ optionText:'',voteCount:0});
  }

}
