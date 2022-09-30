import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from './data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  subscriptionPrevious!: Subscription;
  randomNumber!: number;
  previousNumber!: number;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getNumbers();

    this.subscription = this.dataService.dataState.subscribe(
      (number) => {
        this.randomNumber = number;
      }
    );

    this.subscriptionPrevious = this.dataService.dataSubjectPrevious.subscribe(
      (number) => {
        this.previousNumber = number;
      }
    );

  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    if (this.subscriptionPrevious) {
      this.subscriptionPrevious.unsubscribe();
    }
  }

}
