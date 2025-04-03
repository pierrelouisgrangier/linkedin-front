import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { Truck, TruckService } from '../truck.service';

@Component({
  selector: 'app-all',
  standalone: true,
  imports: [
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './all.component.html',
  styleUrl: './all.component.css',
})
export class AllComponent implements OnInit {
  trucks: Array<Truck> = [];
  displayedColumns: string[] = [
    'id',
    'name',
    'brand',
    'wheelBrand',
    'wheelSize',
  ];
  truckForm: FormGroup;
  constructor(private truckService: TruckService, fb: FormBuilder) {
    this.truckForm = fb.group({
      id: [''],
      name: [''],
      brand: [''],
      wheelBrand: [''],
      wheelSize: [''],
    });
  }
  ngOnInit(): void {
    this.truckService.getAll().subscribe((trucks) => {
      this.trucks = trucks;
    });
  }

  submitForm() {
    const newTruck: Truck = {
      id: this.truckForm.value.id,
      name: this.truckForm.value.name,
      brand: this.truckForm.value.brand,
      wheelSteering: {
        brand: this.truckForm.value.wheelBrand,
        size: this.truckForm.value.wheelSize,
      },
    };
    this.truckService.create(newTruck).subscribe(() => {
      location.reload();
    });
    console.log('Camion créé/modifié :', newTruck);
  }
}
