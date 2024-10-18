import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  form!: FormGroup;
  id!: number;

  constructor (
    private _productService: ProductService,
    private _fb: FormBuilder,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit (): void {
    this.form = this._fb.group({
      name: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
      price: [null, [Validators.required, Validators.min(0), Validators.max(9999)]]
    });

    // Récupérer l'id dans l'URL
    this.id = this._route.snapshot.params['id'];

    this._productService.getById(this.id).subscribe((data) => this.form.patchValue(data));
  }

  onSubmit (): void {
    // console.log(this.form.value);
    console.log('this.form.valid :>> ', this.form.valid);
    if (this.form.invalid) return;
    this._productService.update(this.id, this.form.value).subscribe(() => this._router.navigateByUrl('/demo21'));
  }
}
