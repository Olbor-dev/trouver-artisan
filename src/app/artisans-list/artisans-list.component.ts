import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { ArtisanComponent } from '../artisan/artisan.component';
import { Artisan } from '../artisan';
import { ArtisansService } from '../artisans.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-artisans-list',
  imports: [CommonModule, ArtisanComponent],
  template: `
        <div class="article">
          <div class="line">
          </div>
          <h2 class="article-title">Liste des artisans "{{ category ? category : "tous"}}"</h2>
          <div class="container">
            <div class="d-flex flex-wrap justify-content-center gap-3">
              <app-artisan *ngFor="let artisan of filteredArtisans" [artisan]="artisan"></app-artisan>
            </div>
            <div *ngIf="filteredArtisans.length === 0 && category === 'recherche'" class="no-results">
              <p class="text-center fs-4">Aucun résultat trouvé pour votre recherche.</p>
            </div>
          </div>
          
        </div>
  `,
  styleUrl: './artisans-list.component.scss'
})
export class ArtisansListComponent implements OnInit, OnDestroy {
  artisansList: Artisan[] = [];
  filteredArtisans: Artisan[] = [];
  artisansService: ArtisansService = inject (ArtisansService);
  searchService: SearchService = inject(SearchService); //Injecte le SearchService
  category: string | null = null;
  validCategorys: string[] = ['Bâtiment', 'Services', 'Fabrication', 'Alimentation'];
  private searchSubscription: Subscription |undefined; // Déclare une variable pour l'abonnement


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.artisansService.getArtisans().subscribe((data: Artisan[]) => {
      this.artisansList = data;
  
      this.route.paramMap.subscribe(params => {
        this.category = params.get('category');
        this.filterArtisans(); // Appelle la fonction de filtrage initiale
      });
  
      // S'abonne aux changements de la valeur de recherche
      this.searchSubscription = this.searchService.currentSearchValue.subscribe(searchTerm => {
        console.log('Valeur de recherche actuelle :', searchTerm);
        this.filterArtisans(searchTerm); // Refiltre les artisans lors de la recherche
      });
    });
  }
  
  ngOnDestroy() {
    // Se désabonne pour éviter les fuites de mémoire
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }
  }
  
  filterArtisans(searchTerm: string = '') {
    let artisansToFilter = [...this.artisansList]; // Crée une copie pour le filtrage
  
    // Filtrage par catégorie (si une catégorie est sélectionnée via l'URL et n'est pas 'search')
    if (this.category && this.category !== 'recherche') {
      if (!this.validCategorys.includes(this.category)) {
        this.router.navigate(['/404']);
        return;
      }
      artisansToFilter = artisansToFilter.filter(a => a.category === this.category);
    }
  
    // Filtrage par terme de recherche
    if (searchTerm && searchTerm.trim() !== '') {
      this.filteredArtisans = artisansToFilter.filter(artisan =>
        artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artisan.specialty.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artisan.location.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.filteredArtisans = artisansToFilter; // Si pas de terme de recherche, affiche la liste (potentiellement filtrée par catégorie)
    }
  }
  
}

