import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
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
          <div class="">

          </div>
        </div>
      </div>
    </div>
  `,
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
