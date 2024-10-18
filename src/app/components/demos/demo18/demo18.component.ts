import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-demo18',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './demo18.component.html',
  styleUrl: './demo18.component.css'
})
export class Demo18Component {
  user!: any;

  constructor (private route: ActivatedRoute) { }

  ngOnInit (): void {
    this.user = this.route.snapshot.data['user'];
  }
}
