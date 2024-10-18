import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  form!: FormGroup;

  constructor (private _productService: ProductService, private _fb: FormBuilder, private router: Router) { }

  ngOnInit (): void {
    this.form = this._fb.group({
      name: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      price: [null, [Validators.required, Validators.min(0), Validators.max(9999)]]
    });
  }

  onSubmit (): void {
    // console.log(this.form.value);
    console.log('this.form.valid :>> ', this.form.valid);
    if (this.form.invalid) return;
    this._productService.add(this.form.value).subscribe(() => this.router.navigateByUrl('/demo21'));
  }
}
