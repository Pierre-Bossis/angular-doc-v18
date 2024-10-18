import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Product } from './product';
import { ProductService } from './product.service';
import { finalize, mergeMap } from 'rxjs';

@Component({
  selector: 'app-demo21',
  standalone: true,
  imports: [RouterLink,CurrencyPipe],
  templateUrl: './demo21.component.html',
  styleUrl: './demo21.component.css'
})
export class Demo21Component {
  products: Product[] = [];

  constructor (private _productService: ProductService) { }

  ngOnInit (): void {
    this._productService.get().subscribe((data) => this.products = data);
  }

  delete (id: number): void {
    // Sans pipe l'observable, la suppression se fait uniquement côté backend
    this._productService
      .delete(id)
      .pipe(
        mergeMap(() => this._productService.get()),
        finalize(() => console.log('Coucou'))
      )
      .subscribe((data) => this.products = data);

  }
}
