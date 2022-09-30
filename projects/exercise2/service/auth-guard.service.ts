import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor() { }

  // the Router call canActivate() method,
  canActivate(): boolean {
    alert('This is secure route, You can not access it!');
    return false;
  }
}