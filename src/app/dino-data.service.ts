import { Injectable } from '@angular/core';
import { Dino } from 'dino-components/dist/types/classes/Dino';
import {HttpClient} from '@angular/common/http';
import { of } from 'rxjs';

const dinoDataUrl = '/assets/data/data.json';

@Injectable({
  providedIn: 'root'
})
export class DinoDataService {
  private dinosaurs: Array<Dino>;
  constructor(private http: HttpClient) { }

  getDinosaurs() {
    if (!this.dinosaurs) {
      const subscription = this.http.get<Array<Dino>>(dinoDataUrl);
      subscription.subscribe((data) => {
        this.dinosaurs = data;
      });
      return subscription;
    } else {
      return of(this.dinosaurs);
    }
  }

  updateDinosaur(updateDino: Dino) {
    const index = this.dinosaurs.findIndex((dino) => {
      return updateDino.name === dino.name;
    });
    this.dinosaurs[index] = updateDino;
  }
}
