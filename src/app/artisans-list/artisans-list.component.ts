import { Component, OnInit, inject } from '@angular/core';
import { ArtisanComponent } from '../artisan/artisan.component';
import { Artisan } from '../artisan';
import { ArtisansService } from '../artisans.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

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
          </div>
          
        </div>
  `,
  styleUrl: './artisans-list.component.scss'
})
export class ArtisansListComponent implements OnInit {
  artisansList: Artisan[] = [];
  filteredArtisans: Artisan[] = [];
  artisansService: ArtisansService = inject (ArtisansService);
  category: string | null = null;
  validCategorys: string[] = ['Bâtiment', 'Services', 'Fabrication', 'Alimentation'];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.artisansService.getArtisans().subscribe((data: Artisan[]) => {
      this.artisansList = data;

      this.route.paramMap.subscribe(params => {
        this.category = params.get('category');

        if (this.category) {
          // Redirection vers la page 404 si la category n'existe pas dans la base
          if (!this.validCategorys.includes(this.category)) {
            this.router.navigate(['/404']);
            return;
          }
          this.filteredArtisans = this.artisansList.filter(
            a => a.category === this.category
          );

        } else {
          this.filteredArtisans = this.artisansList;
        }
      });
    });
  }
}
