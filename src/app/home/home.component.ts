import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  template: `
    <div>
      <div class="info">
        <h1>Comment trouver mon artisan ?</h1>
        <div class="list">
          <div class="list-item">
            <div class="list-item-number">
              <p>1</p>
            </div>
            <p>Choisir la catégorie d'artisanat dans le menu</p>
          </div>
          <div class="list-item">
            <div class="list-item-number">
              <p>2</p>
            </div>
            <p>Choisir un artisan</p>
          </div>
          <div class="list-item">
            <div class="list-item-number">
              <p>3</p>
            </div>
            <p>Le contacter via le formulaire de contact</p>
          </div>
          <div class="list-item">
            <div class="list-item-number">
              <p>4</p>
            </div>
            <p>Une réponse sera apportée sous 48h</p>
          </div>
        </div>
      </div>
      <div class="article">
        <div class="article-title">
          <div class="line">

          </div>
          <h2>Artisans du mois</h2>
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
