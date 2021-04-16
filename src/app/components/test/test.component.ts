import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Resultat } from 'src/app/interfaces/resultat';
import { ResultatService } from 'src/app/services/resultat.service';
import { merge, Observable, of as observableOf } from 'rxjs';
import { pipe } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  displayedColumns: string[] = ['adulte', 'aine', 'enfant', 'localite', 'total'];
  dataSource = new MatTableDataSource<Resultat>();
  res: Resultat[] = [];
  maxEnfants: any;

  @ViewChild(MatPaginator, {static: true})paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private resultatService: ResultatService) { }

  ngOnInit(): void {
     this.load_DataSource();
  }


    load_DataSource() {

      merge()
      .pipe(
      startWith({}),
      switchMap(() => {
        return this.resultatService.getAll()
      }),
      catchError(() => {
        return observableOf([]);
      })
      ).subscribe(res => {
        console.log(res);
        this.dataSource.data = res as Resultat[];
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    }

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

  }
