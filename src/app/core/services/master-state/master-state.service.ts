import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TProvider } from 'src/app/shared/types/providers/providers.type';
import { environment } from 'src/environments/environment';
import { TMasterState } from 'src/app/shared/types';

@Injectable({
  providedIn: 'root'
})
export class MasterStateService {

  private envApiUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  fnFindAllMasterStatesByCountryId(countryId: number): Observable<TMasterState[]>{
    return this.http.get<TMasterState[]>(`${this.envApiUrl}/master_state/getByCountryId/${countryId}`);
  }
}
