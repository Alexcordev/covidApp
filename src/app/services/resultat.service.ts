import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import {Appointment} from '../interfaces/appointment';
import {Resultat} from '../interfaces/resultat';


@Injectable({
  providedIn: 'root'
})
export class ResultatService {
  private jsonURL = 'assets/data/resultat.json';
  private casEnfants = [];
  private tmp: number;

  private highest = Number.NEGATIVE_INFINITY;

  constructor(private http: HttpClient) { }

  //retourne tous les jsons du fichier resultat.json dans un tableau
  getAll(): Observable<Resultat[]> {
    return this.http.get<Resultat[]>(`${this.jsonURL}`);

  }

//retourne un tableau des jsons correspondant aux localités ayant plus des cas positifs pour les enfants.
  getTopEnfant(arr: any) {
    const res = {
      localite: '',
      enfant: -Infinity
   };
   for(let i = 0; i < arr.length; i++) {

      const { localite, enfant } = arr[i];
      if(enfant > res.enfant){
         res.localite = localite;
         res.enfant = enfant;

   }
   };

return res;
  }

  createAppointment(appointment: Appointment) {
    console.log(appointment);
     return appointment;
  }


  }
