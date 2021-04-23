import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Resultat } from 'src/app/interfaces/resultat';
import { ResultatService } from 'src/app/services/resultat.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = [
    'localite',
    'total',
    'enfant',
    'adulte',
    'aine',
  ];
  res: Resultat[] = [];
  dataSource = new MatTableDataSource([...this.res]);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private resultatService: ResultatService) {}

  ngOnInit(): void {
    this.load_DataSource();
  }

  load_DataSource() {
    return this.resultatService.getAll().subscribe((res) => {
      console.log(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.dataSource.data = res;
      console.log('dataSource.data', this.dataSource.data);
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
