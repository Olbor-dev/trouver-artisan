import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  template: `
    <div>
      <a href="">
        <img src="Logo-TMA-300px.png" alt="Logo du site trouver mon artisan de la région Auvergne Rhône Alpes">
      </a>
      <div>
        <div class="search">
          <label for="">Rechercher</label>
          <input type="text" placeholder="Rechercher" />
          <img src="search.svg" alt="Icone représentant une loupe">
        </div>
        <nav>
          <a href="">Bâtiment</a>
          <a href="">Services</a>
          <a href="">Fabrication</a>
          <a href="">Alimentation</a>
        </nav>
      </div>
    </div>
  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
