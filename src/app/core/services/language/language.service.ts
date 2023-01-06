import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private envLanguageKey = environment.LSLANGUAGEKEY;

  constructor(){}

  setLanguage(language: string) {
    localStorage.setItem(this.envLanguageKey,language);
  }

  setDefaultLanguage() {
    localStorage.setItem(this.envLanguageKey,'ES');
  }

  getLanguage(): string {
    let language  = localStorage.getItem(this.envLanguageKey);
    if(!language){language = 'ES'};
    return language;
  }

  removeLanguage() {
    localStorage.removeItem(this.envLanguageKey);
  }
}
