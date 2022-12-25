import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-provider',
  templateUrl: './create-provider.component.html',
  styleUrls: ['./create-provider.component.scss']
})
export class CreateProviderComponent implements OnInit {

  basicDetails : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onImageChange(event:any) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        // this.addEventForm.patchValue({
        //   banner: reader.result
        // });
        // this.formData.append('banner', event.target.files[0], event.target.files[0].name);
      };
    }}

    saveAndNext(){
      this.basicDetails = true;
    }
}
