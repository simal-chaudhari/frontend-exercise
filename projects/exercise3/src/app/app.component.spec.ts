import { TestBed } from '@angular/core/testing';
import { DataService } from './../app/data.service';

describe('AppComponent', () => {
  let service: DataService
  let randomNumber: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        DataService,
      ]
    }).compileComponents();

    service = TestBed.get(DataService);
  });

  it('dataService should return value that contains number', (async () => {
    service.getNumbers();
    let data;
    randomNumber = await service.dataState.subscribe((value: number) => {
      data = value;
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThanOrEqual(10);
    });

    if (data) {
      expect(data).toBeGreaterThanOrEqual(0);
      expect(data).toBeLessThanOrEqual(10);
    }
    randomNumber.unsubscribe();
  }));
});
