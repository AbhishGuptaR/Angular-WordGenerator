import { Component } from '@angular/core';
import arrayWords from '../utils/words';
import arrayCountry from '../utils/countries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'word-generator';

  words = '';
  limit = 10;

  countries = '';
  count = 0;

  handleSlideChange(newLimit: number) {
    this.limit = newLimit;
  }

  generateWords() {
    this.words = arrayWords.slice(0, this.limit).join(' ');
  }

  generateCountries() {
    this.count = Math.floor(Math.random() * 20) + 1;
    this.countries = arrayCountry.slice(0, this.count).join(' ');
  }
}
