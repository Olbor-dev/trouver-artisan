import { Pipe, PipeTransform } from '@angular/core';
import { Artisan } from '../artisan';

@Pipe({
  name: 'artisanOfMonth'
})
export class ArtisanOfMonthPipe implements PipeTransform {

  transform(artisans: Artisan[], afficherTop: boolean = true): Artisan[] {
    if (!artisans) return [];

    return artisans.filter(artisan => artisan.top === afficherTop);
  }

}
