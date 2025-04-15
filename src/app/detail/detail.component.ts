import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtisansService } from '../artisans.service';
import { Artisan } from '../artisan';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-detail',
  imports: [CommonModule],
  template: `
    <section *ngIf="artisan">
      <article>
        <div>
          <p>Entreprise :</p>
          <h1>{{artisan.name}}</h1>
        </div>
        <div>
          <p>Note :</p>
          <div class="stars d-flex gap-1 fs-4">
            <ng-container *ngFor="let star of [1,2,3,4,5]; let i = index">
              <span class="text-primary fs-2">
                {{ (artisan.note - i) > 0.5 ? '★' : '☆' }}</span>
            </ng-container>
          </div>
          <p>( {{artisan.note}} )</p>
        </div>
        <div>
          <p>Spécialité :</p>
          <p>{{artisan.specialty}}</p>
        </div>
        <div>
          <p>Localisation :</p>
          <h3>{{artisan.location}}</h3>
        </div>
        <div>
          <p>A propos :</p>
          <p>{{artisan.about}}</p>
        </div>
        <div>
          <p>Site web :</p>
          <p>{{artisan.website}}</p>
        </div>
      </article>
    </section>
  `,
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  artisansService = inject(ArtisansService);
  artisan: Artisan | undefined;
  
  constructor() {
    const artisanId = Number(this.route.snapshot.params['id']);
    this.artisan = this.artisansService.getArtisanById(artisanId);
  }
}
