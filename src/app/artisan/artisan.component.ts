import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Artisan } from '../artisan';

@Component({
  selector: 'app-artisan',
  imports: [CommonModule],
  template: `
    <section class="d-flex flex-column align-items-center bg-info p-4 rounded-4 mb-3">
      <h2 class="text-secondary fw-bold stamp">{{artisan.name}}</h2>
      <div class="stars d-flex gap-1 fs-4">
        <ng-container *ngFor="let star of [1,2,3,4,5]; let i = index">
          <span class="text-primary fs-2">
            {{ (artisan.note - i) > 0.5 ? '★' : '☆' }}</span>
        </ng-container>
      </div>
      <p class="text-secondary fw-bold fs-5">{{artisan.specialty}}</p>
      <h3 class="text-secondary fw-bold fs-4">{{artisan.location}}</h3>
    </section>
    
  `,
  styleUrl: './artisan.component.scss'
})
export class ArtisanComponent {
  @Input() artisan!: Artisan;
}
