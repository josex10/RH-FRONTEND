import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TUpdateResult } from 'src/app/shared/types';
import { TProvider } from 'src/app/shared/types/providers/providers.type';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private envApiUrl = environment.API_URL;

  constructor(private http: HttpClient) { }

  fnFindAllSystemSuppliers(companyId: number): Observable<TProvider[]>{
    return this.http.get<TProvider[]>(`${this.envApiUrl}/system-supplier/find-all/${companyId}`);
  }

  fnEditProvider(provider: TProvider): Observable<TUpdateResult>{
    return this.http.patch<TUpdateResult>(`${this.envApiUrl}/system-supplier/edit/${provider.clm_id}`, provider);
  }
}
