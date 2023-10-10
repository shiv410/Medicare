import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Medicine } from '../medicine';
import { MedicineService } from '../medicine.service';
import { Category } from '../category';
import { CategoryService } from '../category.service';


@Component({
  selector: 'app-updatemedicine',
  templateUrl: './updatemedicine.component.html',
  styleUrls: ['./updatemedicine.component.css']
})
export class UpdatemedicineComponent {

  medicine: any = {};
  categories: any[] = [];
  selectedImage!: File;

  constructor(
    private medicineService: MedicineService,
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadMedicine(+id);
    }
    this.loadCategories();
  }

  loadMedicine(id: number): void {
    this.medicineService.getMedicine(id).subscribe(data => {
      this.medicine = data;
      if (this.medicine.image) {
        this.medicine.image = 'data:image/jpeg;base64,' + this.medicine.image;
      }
    });
  }

  loadCategories(): void {
    this.categoryService.getAllCategories().subscribe(
      data => {
        this.categories = data;
      },
      error => {
        console.error('Error loading categories!', error);
      }
    );
  }


  onSubmit(form: any) {
    const formData = new FormData();

    let id = form.value.id;  // Ensure this ID is correctly set
    if (!id) {
      console.error("Medicine ID is not set!");
      return;
    }

    formData.append('name', form.value.name);
    formData.append('description', form.value.description);
    formData.append('brand', form.value.brand);
    formData.append('availableQuantity', form.value.availableQuantity);
    formData.append('price', form.value.price);
    formData.append('categoryId', form.value.categoryId);

    if (form.value.image) {
      formData.append('image', form.value.image, form.value.image.name);
    }


    this.medicineService.updateMedicine(form.value.id, formData).subscribe(
      response => {
        console.log('Medicine updated successfully');
      },
      error => {
        console.error('Error updating medicine:', error);
      }
    );

  }





  // onSubmit(): void {
  //   const formData: FormData = new FormData();
  //   formData.append('name', this.medicine.name);
  //   formData.append('description', this.medicine.description);
  //   formData.append('brand', this.medicine.brand.toString());
  //   formData.append('availableQuantity', this.medicine.availableQuantity.toString());
  //   formData.append('price', this.medicine.price.toString());
  //   formData.append('categoryId', this.medicine.category.toString());
  //   formData.append('isActive', this.medicine.isActive);
  //   if (this.selectedImage) {
  //     formData.append('image', this.selectedImage, this.selectedImage.name);
  //   }

  //   this.medicineService.updateMedicine(this.medicine.id).subscribe(response => {
  //     alert('Medicine update successfully!');
  //   });
  // }

  onImageSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.medicine.image = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  // Convert base64 to blob
  dataURItoBlob(dataURI: string): Blob {
    const byteString = window.atob(dataURI.split(',')[1]);
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  }

}
