import { Component } from '@angular/core';
import { RouterModule,Router } from '@angular/router';
import { SearchService } from '../search.service';

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
            <input class="search-area" type="text" placeholder="Rechercher" name="searchValue"
              (click)="navigateToSearch()"
              #myInput (keyup.enter)="submitEntry(myInput.value, myInput)"
            />
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
 
  constructor(
    private router: Router,
    private searchService: SearchService
  ) {}

  submitEntry(searchValue: string, inputElement: HTMLInputElement) {
    if (searchValue && searchValue.trim() !== '') {
      // La valeur n'est pas nulle, indéfinie ou ne contient que des espaces
      this.searchService.updateSearchValue(searchValue);
      this.searchFunction(searchValue);
      inputElement.value = '';
      
    } else {
      console.log("L'entrée est vide, la fonction de recherche n'est pas exécutée.");
    }
  }
  searchFunction(search: string) {
    console.log('Recherche de : ', search);
    this.router.navigate(['/home/recherche']);
  }

  navigateToSearch() {
    this.router.navigate(['/home/recherche']);
  }
}
