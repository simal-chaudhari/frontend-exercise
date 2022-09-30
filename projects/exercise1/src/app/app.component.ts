import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  productNameMinLenght = 5;
  productNameMaxLenght = 20;
  priceMinLenght = 5;
  priceMaxLenght = 20;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      product_name: ['', [Validators.required, Validators.minLength(this.productNameMinLenght), Validators.maxLength(this.productNameMaxLenght)]],
      price: ['', [Validators.required, Validators.pattern("^[0-9]*$"), Validators.min(this.priceMinLenght), Validators.max(this.priceMaxLenght)]],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // Use service to create Data and get response
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }
}
