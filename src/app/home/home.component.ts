import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtisanComponent } from "../artisan/artisan.component";
import { Artisan } from '../artisan';
import { ArtisansService } from '../artisans.service';
import { ArtisanOfMonthPipe } from '../pipes/artisan-of-month.pipe';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ArtisanComponent, ArtisanOfMonthPipe],
  template: `
    <div>
      <div class="info">
        <h1 class="info-title">Comment trouver mon artisan ?</h1>
        <div class="list">
          <div class="list-item">
            <div class="list-item-number">
              <p>1</p>
            </div>
            <p class="list-item-text">Choisir la catégorie d'artisanat dans le menu</p>
          </div>
          <div class="list-item">
            <div class="list-item-number">
              <p>2</p>
            </div>
            <p class="list-item-text">Choisir un artisan</p>
          </div>
          <div class="list-item">
            <div class="list-item-number">
              <p>3</p>
            </div>
            <p class="list-item-text">Le contacter via le formulaire de contact</p>
          </div>
          <div class="list-item special">
            <div class="list-item-number">
              <p>4</p>
            </div>
            <p class="list-item-text">Une réponse sera apportée sous 48h</p>
          </div>
        </div>
      </div>
      <div class="article">
        <div class="">
          <div class="line">

          </div>
          <h2 class="article-title">Artisans du mois</h2>
          <div class="d-flex flex-row justify-content-evenly flex-wrap">
            <app-artisan *ngFor="let artisan of artisanList | artisanOfMonth" [artisan]="artisan"></app-artisan>

          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  artisanList: Artisan[] = [];
  artisansService: ArtisansService = inject (ArtisansService);

  constructor() {
    this.artisanList = this.artisansService.getAllArtisans();
  }

}
