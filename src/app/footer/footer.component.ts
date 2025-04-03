import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
    <div>
      <div class="rectangle">

      </div>
      <div class="footer">
        <div class="info">
          <img src="Logo-TMA-300px.png" alt="Logo du site trouver mon artisan de la région Auvergne Rhône Alpes">
          <address>
            <h3><strong>Lyon</strong></h3>
            <p>
              101 cours Charlemagne<br>
              CS 20033<br>
              69269 LYON CEDEX 02<br>
              France
            </p>
            <div class="telephone">
              <img src="telephone.svg" alt="Logo téléphone">
              <a href="tel:+33426734000">+ 33(0)4 26 73 40 00</a>
            </div>
          </address>
        </div>
        <div class="links">
          <a href="">Mentions légales</a>
          <a href="">Données personnelles</a>
          <a href="">Accessibilité</a>
          <a href="">Cookies</a>
        </div>      
      </div>
    </div>
  `,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
