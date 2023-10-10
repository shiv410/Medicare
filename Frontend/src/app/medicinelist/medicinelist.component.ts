import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-medicinelist',
  templateUrl: './medicinelist.component.html',
  styleUrls: ['./medicinelist.component.css']
})
export class MedicinelistComponent {

  medicines: Medicine[] = [];

  constructor(
    private medicineService: MedicineService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllMedicines();
  }

  getAllMedicines(): void {
    this.medicineService.getAllMedicines().subscribe(medicines => this.medicines = medicines);
  }

  updateMedicine(id: number): void {
    console.log('Update medicine with ID:', id);
    this.router.navigate(['/updatemedicine', id]);
  }

  deleteMedicine(id: number): void {
    if (confirm('Are you sure you want to delete this medicine?')) {
      this.medicineService.deleteMedicine(id).subscribe(() => {
        this.getAllMedicines();  // Refresh the list after deletion
      });
    }
  }

  toggleActive(medicine: Medicine): void {
    medicine.isActive = !medicine.isActive;

    // Optionally: Update the status on the server.
    // this.medicineService.updateMedicine(medicine.id).subscribe();
  }


}
