import { Injectable } from '@angular/core';
import { interval, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class DataService {
  public dataSubjectPrevious = new BehaviorSubject<number>(0);
  public dataSubject = new BehaviorSubject<number>(0);
  public dataState = this.dataSubject.asObservable();
  public dataStatePrevious = this.dataSubjectPrevious.asObservable();

  public getNumbers(): void {
    const min = 0;
    const max = 10;
    interval(1000).subscribe((x: any) => {
      this.dataSubjectPrevious.next(this.dataSubject.value);
      this.dataSubject.next((Math.floor(Math.random() * (max - min + 1) + min)));
    });
  }

  public getPreviousNumbers(): number {
    return this.dataSubject.value;
  }
}
