import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  models: string[] = [
    'Globo MTB 29 Full Suspension',
    'Globo MYB Carbon Fiver Race',
    'Globo Time Trial Race',
    'Globo 589',
    'Globo Magic Mistic Bike'
  ];

  //bikeForm: FormGroup ;
  validMessage: string = '';

  bikeForm = new FormGroup({});
  constructor(private bikeService: BikeService) {

  }

  ngOnInit(): void {
    this.bikeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      serialNumber: new FormControl('', Validators.required),
      purchasePrice: new FormControl('', Validators.required),
      purchaseDate: new FormControl('', Validators.required),
      contact: new FormControl()
    });

  }


  submitRegistration(): void {
    console.log('enviaste el formulario')
    if (this.bikeForm.valid) {
      this.validMessage = 'su Garantia de Bicicleta Fue registrada Correctamente';
      this.bikeService.createdBikeRegistration(this.bikeForm.value).subscribe(
        data => {
          this.bikeForm.reset();
          return true;
        }
      )
    } else {
      this.validMessage = 'Por favor completa el formulario ';
    }

  }

}
