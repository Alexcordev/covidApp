import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ResultatService } from 'src/app/services/resultat.service';

@Component({
  selector: 'app-vaccin',
  templateUrl: './vaccin.component.html',
  styleUrls: ['./vaccin.component.css']
})
export class VaccinComponent implements OnInit {
  creationForm: any;

  constructor(private fb: FormBuilder, private resultatService: ResultatService) { }

  ngOnInit() {
    this.createForm();

    }

  createForm() {
    this.creationForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      telephone: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  createAppointment() {
    if(this.creationForm.valid) {
      console.log(this.creationForm);
      this.resultatService
      .createAppointment(this.creationForm.value);
      this.creationForm.reset();

    }
  }

}
