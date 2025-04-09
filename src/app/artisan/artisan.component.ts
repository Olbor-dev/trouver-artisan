import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Artisan } from '../artisan';

@Component({
  selector: 'app-artisan',
  imports: [CommonModule],
  template: `
    <p>
      artisan works!
    </p>
    <section>
      <h2>{{artisan.name}}</h2>
    </section>
  `,
  styleUrl: './artisan.component.scss'
})
export class ArtisanComponent {
  @Input() artisan!: Artisan;
}
