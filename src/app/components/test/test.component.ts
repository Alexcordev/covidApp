import { newArray } from '@angular/compiler/src/util';
import { Component, ViewChild, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ResultatService } from 'src/app/services/resultat.service';
import { Resultat } from '../../interfaces/resultat';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

export class TestComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {


  }
}
