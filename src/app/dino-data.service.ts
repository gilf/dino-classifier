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

  getDinosaurs(): Promise<Array<Dino>> {
    if (!this.dinosaurs) {
      const promise = this.http.get<Array<Dino>>(dinoDataUrl)
        .pipe().toPromise();
      promise.then((data) => {
        this.dinosaurs = data;
        return data;
      });
      return promise;
    } else {
      return new Promise((resolve) => resolve(this.dinosaurs));
    }
  }

  updateDinosaur(updateDino: Dino) {
    const index = this.dinosaurs.findIndex((dino) => {
      return updateDino.name === dino.name;
    });
    this.dinosaurs[index] = updateDino;
  }
}
