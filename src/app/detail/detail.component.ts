import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtisansService } from '../artisans.service';
import { Artisan } from '../artisan';
import { CommonModule } from '@angular/common';
import { FormControl,FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-detail',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <section>
      <article class="container" *ngIf="artisan">
        <div class="row">
          <p class="col-4 text-secondary fs-4">Entreprise :</p>
          <h2 class="col-8 text-secondary fw-bold">{{artisan.name}}</h2>
        </div>
        <div class="row align-items-start">
          <p class="col-4 text-secondary fs-4">Note :</p>
          <div class="col-4">
            <div class="stars d-flex gap-1 fs-3">
              <ng-container *ngFor="let star of [1,2,3,4,5]; let i = index">
                <span class="text-primary">
                  {{ (artisan.note - i) > 0.5 ? '★' : '☆' }}</span>
              </ng-container>
              <p class="col-8 text-secondary fs-6">( {{artisan.note}} )</p>
            </div>
          </div>
        </div>
        <div class="row">
          <p class="col-4 text-secondary fs-4">Spécialité :</p>
          <p class="col-8 text-secondary fs-4">{{artisan.specialty}}</p>
        </div>
        <div class="row">
          <p class="col-4 text-secondary fs-4">Localisation :</p>
          <h3 class="col-8 text-secondary fw-bold fs-4">{{artisan.location}}</h3>
        </div>
        <div class="row">
          <p class="col-4 text-secondary fs-4">A propos :</p>
          <p class="col-8 text-secondary fs-4">{{artisan.about}}</p>
        </div>
        <div class="row">
          <p class="col-4 text-secondary fs-4">Site web :</p>
          <p class="col-8 text-secondary fs-4">{{artisan.website}}</p>
        </div>
      </article>
      <form [formGroup]="applyForm">
        <label for="first-name">Nom</label>
        <input id="first-name" type="text" formControlName="firstName">
        <label for="subject">Objet</label>
        <input id="subject" type="text" formControlName="subject">
        <label for="message">Message</label>
        <input id="message" type="text" formControlName="message">
        <button type="submit" class="btn btn-primary">Soumettre</button>
      </form>
    </section>
  `,
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  artisansService = inject(ArtisansService);
  artisan: Artisan | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl('')
  });
  
  constructor() {
    const artisanId = Number(this.route.snapshot.params['id']);
    this.artisan = this.artisansService.getArtisanById(artisanId);
  }
}
