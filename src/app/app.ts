import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PollComponent } from './poll/poll';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PollComponent],
  standalone:true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'poll-app';
}
