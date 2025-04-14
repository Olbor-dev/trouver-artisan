import { Component, OnInit, inject } from '@angular/core';
import { ArtisanComponent } from '../artisan/artisan.component';
import { Artisan } from '../artisan';
import { ArtisansService } from '../artisans.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

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

  constructor(
    private route: ActivatedRoute,
    
  ) {}

  ngOnInit() {
    this.artisansService.getArtisans().subscribe((data: Artisan[]) => {
      this.artisansList = data;

      this.route.paramMap.subscribe(params => {
        this.category = params.get('category');
        const category = params.get('category');
        if (category) {
          this.filteredArtisans = this.artisansList.filter(a => a.category === category);
          //console.log("Categorie", this.category)
        } else {
          this.filteredArtisans = this.artisansList;
        }
      });
    });
  }
}
