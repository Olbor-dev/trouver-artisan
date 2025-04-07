import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <div class="myContainer">
      <div class="rectangle">

      </div>
      <div class="footer">
        <div class="info">
          <img class="logo" src="assets/images/Logo-White-500px.png" alt="Logo du site trouver mon artisan de la région Auvergne Rhône Alpes">
          <address class="address">
            <h3><strong>Lyon</strong></h3>
            <p>
              101 cours Charlemagne<br>
              CS 20033<br>
              69269 LYON CEDEX 02<br>
              France
            </p>
            <div class="telephone nav-underline">
              <img src="telephone-white.svg" alt="Logo téléphone" class="telephone-logo">
              <a class="nav-link" href="tel:+33426734000">+ 33(0)4 26 73 40 00</a>
            </div>
          </address>
        </div>
        <div class="menu nav-underline">
          <a class="nav-link" href="#">Mentions légales</a>
          <a class="nav-link" href="#">Données personnelles</a>
          <a class="nav-link" href="#">Accessibilité</a>
          <a class="nav-link" href="#">Cookies</a>
        </div>      
      </div>
    </div>
  `,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
