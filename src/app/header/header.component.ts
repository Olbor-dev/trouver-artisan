import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  template: `
    <div>
      <div class="myContainer">
        <div class="logo">
          <a href="">
            <img class="img-fluid" src="assets/images/Logo-TMA-500px.png" alt="Logo du site trouver mon artisan de la région Auvergne Rhône Alpes">
          </a>
        </div>
        <div class="menu">
          <div class="search">
            <input class="search-area" type="text" placeholder="Rechercher" />
            <img src="search.svg" alt="Icone représentant une loupe">
          </div>
          <nav>
            <ul class="nav nav-underline">
              <li class="nav-item">
                <a class="nav-link" [routerLink]="['/home', 'Bâtiment']">Bâtiment</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" [routerLink]="['/home', 'Services']">Services</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" [routerLink]="['/home', 'Fabrication']">Fabrication</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" [routerLink]="['/home', 'Alimentation']">Alimentation</a>
              </li>
            </ul>        
          </nav>
        </div>
      </div>
      <hr class="separator">
    </div>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
