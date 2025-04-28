import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class SearchService {
    private searchValue = new BehaviorSubject<string>('');
    currentSearchValue = this.searchValue.asObservable();

    constructor() {}

    updateSearchValue(newValue: string) {
        this.searchValue.next(newValue);
    }
}