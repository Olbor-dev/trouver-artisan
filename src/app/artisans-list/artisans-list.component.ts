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
        <div class="">
          <div class="line">

          </div>
          <h2 class="article-title">Artisans du </h2>
          <div class="d-flex flex-row justify-content-evenly flex-wrap">
            <app-artisan *ngFor="let artisan of filteredArtisans"></app-artisan>

          </div>
          
        </div>
  `,
  styleUrl: './artisans-list.component.scss'
})
export class ArtisansListComponent implements OnInit {
  artisansList: Artisan[] = [];
  filteredArtisans: Artisan[] = [];
  artisansService: ArtisansService = inject (ArtisansService);

  constructor(
    private route: ActivatedRoute,
    
  ) {}

  ngOnInit() {
    this.artisansService.getArtisans().subscribe((data: Artisan[]) => {
      this.artisansList = data;

      this.route.paramMap.subscribe(params => {
        const category = params.get('category');
        console.log("catégorie", category)
        if (category) {
          this.filteredArtisans = this.artisansList.filter(a => a.category === category);
          
        } else {
          this.filteredArtisans = this.artisansList;
        }
      });
    });
  }
}
