import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';@Injectable({
  providedIn: 'root',
})
export class LoginService {
  link = ':http://localhost:4200//employees';

  constructor(private http: HttpClient) {}

  seConnecter(identifiants) {
    console.log(identifiants);

    return this.http.post(`${this.link}/profile/edit`, identifiants);
  }

  seDeconnecter() {}

  estConnecte() {}
}
