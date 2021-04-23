import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Appointment } from '../interfaces/appointment';
import { Resultat } from '../interfaces/resultat';

@Injectable({
  providedIn: 'root',
})
export class ResultatService {
  private jsonURL = 'assets/data/resultat.json';
  private casEnfants = [];
  private val: any[] = [];

  constructor(private http: HttpClient) {}

  //retourne tous les jsons du fichier resultat.json dans un tableau
  getAll(): Observable<Resultat[]> {
    return this.http.get<Resultat[]>(`${this.jsonURL}`);
  }

  getTopEnfant(val: any): any[] {
    var res = Math.max.apply(
      Math,
      val.map(function (o) {
        return o.enfant;
      })
    );

    for (let i = 0; i < val.length; i++) {
      var maxChildren = val.filter((item) => item.enfant >= res);
    }
    return maxChildren;
  }

  createAppointment(appointment: Appointment) {
    console.log(appointment);
    return appointment;
  }
}
