import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtisansService } from '../artisans.service';
import { Artisan } from '../artisan';
import { CommonModule } from '@angular/common';
import { FormControl,FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-detail',
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="container d-flex flex-wrap justify-content-center mt-4">
    <section class="artisan">
      <article class="" *ngIf="artisan">
        <div class="row">
          <p class="col-4 text-secondary fs-6">Entreprise :</p>
          <h2 class="col-8 text-secondary fw-bold">{{artisan.name}}</h2>
        </div>
        <div class="row align-items-start">
          <p class="col-4 text-secondary fs-6">Note :</p>
          <div class="col-8">
            <div class="d-flex gap-1 fs-5 align-items-center">
              <ng-container *ngFor="let star of [1,2,3,4,5]; let i = index">
                <span class="text-primary">
                  {{ (artisan.note - i) > 0.5 ? '★' : '☆' }}</span>
              </ng-container>
              <p class="mb-0 text-secondary fs-6">( {{artisan.note}} )</p>
            </div>
          </div>
        </div>
        <div class="row">
          <p class="col-4 text-secondary fs-6">Spécialité :</p>
          <p class="col-8 text-secondary fs-5">{{artisan.specialty}}</p>
        </div>
        <div class="row">
          <p class="col-4 text-secondary fs-6">Localisation :</p>
          <h3 class="col-8 text-secondary fw-bold fs-5">{{artisan.location}}</h3>
        </div>
        <div class="row">
          <p class="col-4 text-secondary fs-6">A propos :</p>
          <p class="col-8 text-secondary fs-6">{{artisan.about}}</p>
        </div>
        <div class="row">
          <p class="col-4 text-secondary fs-6">Site web :</p>
          <p class="col-8 text-secondary fs-6">{{artisan.website}}</p>
        </div>
      </article>
    </section>
    <section class="contactForm text-secondary bg-info my-4">
      <p class="text-center p-2">Vous pouvez me contacter avec le formulaire suivant :</p>
      <form class="d-flex flex-column m-3" [formGroup]="applyForm" (ngSubmit)="onSubmit()">
        <label class="name" for="first-name">Nom</label>
        <input id="first-name" type="text" formControlName="firstName">
        <label for="subject">Objet</label>
        <input id="subject" type="text" formControlName="subject">
        <label for="message">Message</label>
        <textarea id="message" type="text" formControlName="message"></textarea>
        <button type="submit" class="btn btn-primary w-50 mt-5 fs-5 position-relative start-50 translate-middle">Soumettre</button>
        <!-- Message affiché après soumission -->
        <div *ngIf="infoMessage" class="alert alert-info text-center">
          {{ infoMessage }}
        </div>
      </form>
    </section>
    </div>
  `,
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  artisansService = inject(ArtisansService);
  artisan: Artisan | undefined;
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    subject: new FormControl(''),
    message: new FormControl('')
  });

  infoMessage: string | null = null;
  
  constructor() {
    const artisanId = Number(this.route.snapshot.params['id']);
    this.artisan = this.artisansService.getArtisanById(artisanId);

    if (!this.artisan) {
      // Redirection vers la page 404 si l'artisan est introuvable
      this.router.navigate(['/404']);
    }
  }

  onSubmit() {
    this.infoMessage = "Formulaire inactif pour le moment";
  }
}
