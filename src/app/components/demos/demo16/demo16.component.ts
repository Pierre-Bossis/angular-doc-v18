import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-demo16',
  standalone: true,
  imports: [],
  templateUrl: './demo16.component.html',
  styleUrl: './demo16.component.css'
})
export class Demo16Component {
  id!: number;
  name!: string;

  constructor (private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit (): void {
    console.log('this._activatedRoute :>> ', this._activatedRoute);

    // La propriété snapshot représente la route à l'instant T
    if (this._activatedRoute.snapshot.params['id']) {
      this.id = this._activatedRoute.snapshot.params['id'];
    }

    if (this._activatedRoute.snapshot.queryParams) {
      console.log('this._activatedRoute.snapshot.queryParams["name"] :>> ', this._activatedRoute.snapshot.queryParams['name']);
      this.name = this._activatedRoute.snapshot.queryParams['name'];
    }
  }

  navigate (): void {
    this._router.navigate(['/routage']);
  }

  navigateWithParam (): void {
    this._router.navigate(['/routage/42']); // Le paramètre de route sera traité par :id dans le router
  }

  navigateWithQuery (): void {
    this._router.navigate(['/routage'], { queryParams: { 'name': 'Pierre' } });
  }
}
