import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule],
      declarations: [AppComponent],
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  it('form invalid when empty', () => {
    expect(component.registerForm.valid).toBeFalsy();
  });

  // product name validation 
  it('product name field validity', () => {
    let errors: any = {};
    let product_name = component.registerForm.controls['product_name'];
    expect(product_name.valid).toBeFalsy();

    // product name field is required
    errors = product_name.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set product name to something
    product_name.setValue("testing");
    errors = product_name.errors || {};
    expect(errors['required']).toBeFalsy();
  });

  // price field validation
  it('price field validity', () => {
    let errors: any = {};
    let price = component.registerForm.controls['price'];

    // price field is required
    errors = price.errors || {};
    expect(errors['required']).toBeTruthy();

    // Set price to something
    price.setValue("4");
    errors = price.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['min']).toBeTruthy();

    // Set price to something correct
    price.setValue(10);
    errors = price.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['min']).toBeFalsy();
  });

  // submitting form 
  it('submitting a form', () => {
    expect(component.registerForm.valid).toBeFalsy();
    component.registerForm.controls['product_name'].setValue("testing");
    component.registerForm.controls['price'].setValue(10);
    expect(component.registerForm.valid).toBeTruthy();

    // Trigger the Submit function
    component.onSubmit();

    // Now we can check to make sure the value is correct
    expect(component.registerForm.controls['product_name'].value).toBe("testing");
    expect(component.registerForm.controls['price'].value).toBe(10);
  });

});
