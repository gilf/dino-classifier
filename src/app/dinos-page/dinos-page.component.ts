import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DinoDataService} from '../dino-data.service';
import {Dino} from 'dino-components/dist/types/classes/Dino';

@Component({
  selector: 'app-dinos-page',
  templateUrl: './dinos-page.component.html',
  styleUrls: ['./dinos-page.component.css']
})
export class DinosPageComponent implements OnInit {
  public dinosaurs: Array<Dino>;
  constructor(private router: Router, private dinoService: DinoDataService) { }

  ngOnInit() {
    this.dinoService.getDinosaurs().subscribe((dinos) => {
      this.dinosaurs = dinos;
    });
  }

  navigateTo(evt) {
    this.router.navigate([`/dino/${evt.detail}`]);
  }
}
