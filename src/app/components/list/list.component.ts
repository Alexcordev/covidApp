import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ResultatService } from 'src/app/services/resultat.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  maxChildren: any;

  constructor(private resultatService: ResultatService) {}

  ngOnInit(): void {
    const obsfromRes = from(this.resultatService.getAll());
    obsfromRes.subscribe((val) => {
      this.maxChildren = this.resultatService.getTopEnfant(val);
    });
  }
}
