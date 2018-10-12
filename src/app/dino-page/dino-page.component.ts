import {Component, OnDestroy, OnInit} from '@angular/core';
import { Dino } from 'dino-components/dist/types/classes/Dino';
import {ActivatedRoute} from '@angular/router';
import {DinoDataService} from '../dino-data.service';

@Component({
  selector: 'app-dino-page',
  templateUrl: './dino-page.component.html',
  styleUrls: ['./dino-page.component.css']
})
export class DinoPageComponent implements OnInit, OnDestroy {
  private sub: any;
  public openForEdit: boolean;
  public dino: Dino;
  public dinoForEdit: Dino;

  constructor(private route: ActivatedRoute, private dinoService: DinoDataService) {
    this.openForEdit = false;
    this.openEditDrawer = this.openEditDrawer.bind(this);
    this.saveDino = this.saveDino.bind(this);
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const index = +params['index'];
      this.dinoService.getDinosaurs().subscribe((dinos) => {
        this.dino = dinos[index];
      });
    });
  }

  openEditDrawer() {
    this.openForEdit = !this.openForEdit;
    if (this.openForEdit) {
      this.dinoForEdit = Object.assign({}, this.dino);
    }
  }

  closeEditDrawer() {
    this.openForEdit = false;
  }

  saveDino() {
    this.dinoService.updateDinosaur(this.dinoForEdit);
    this.dino = this.dinoForEdit;
    this.openForEdit = false;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
