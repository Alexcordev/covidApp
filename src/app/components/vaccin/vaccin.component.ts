import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ResultatService } from 'src/app/services/resultat.service';

@Component({
  selector: 'app-vaccin',
  templateUrl: './vaccin.component.html',
  styleUrls: ['./vaccin.component.css'],
})
export class VaccinComponent implements OnInit {
  creationForm: any;
  msg: string = '';
  success = false;

  constructor(
    private fb: FormBuilder,
    private resultatService: ResultatService
  ) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.creationForm = this.fb.group({
      name: [
        '',
        [
          Validators.minLength(1),
          Validators.maxLength(25),
          Validators.required,
          Validators.pattern('[a-zA-Z]*'),
        ],
      ],
      surname: [
        '',
        [
          Validators.minLength(1),
          Validators.maxLength(25),
          Validators.required,
          Validators.pattern('[a-zA-Z]*'),
        ],
      ],
      telephone: ['', [Validators.pattern('[0-9]{10}'), Validators.required]],
      email: [
        '',
        [
          Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}'),
          Validators.required,
        ],
      ],
    });
  }

  createAppointment() {
    if (this.creationForm.valid) {
      console.log(this.creationForm);
      this.resultatService.createAppointment(this.creationForm.value);
      this.success = true;
      this.msg = ` ${this.creationForm.value.surname} !`;
      this.creationForm.reset();
    }
  }

  onHandleClose() {
    this.success = null;
  }

  public errorHandling = (control: string, error: string) => {
    return this.creationForm.controls[control].hasError(error);
  };
}
