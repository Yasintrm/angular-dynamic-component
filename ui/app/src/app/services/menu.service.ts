import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient: HttpClient) { }

  getMenuItems() {
    const url = environment.apiBaseUrl + "/menu";
    return this.httpClient.get<LazyComponentItem[]>(url);
  }
}
