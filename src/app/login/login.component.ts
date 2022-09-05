import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


otpSent : boolean = false;
  otp!: string; showOtpComponent = true; 
  contactNumber!: number;
@ViewChild("ngOtpInput", { static: false }) ngOtpInput: any; config = { allowNumbersOnly: true, length: 4, isPasswordInput: false, disableAutoFocus: false, placeholder: "*", inputStyles: { width: "50px", height: "50px", }, }; 

constructor(private router: Router, private service : FileUploadService) {} 


getOtp(){
  console.log(this.contactNumber)
  this.otpSent = true;
}
 onOtpChange(otp: string) { 
   this.otp = otp; 
  // When all 4 digits are filled, trigger OTP validation method 
  if (otp.length == 5) { 
    this.validateOtp(); 
  } } 
  setVal(val: any) {
     this.ngOtpInput.setValue(val); 
    } 
  onConfigChange() { 
    this.showOtpComponent = false;
     this.otp = '';
      setTimeout(() => { 
        this.showOtpComponent = true; }, 0); 
    }
      
      
      validateOtp() {
         this.router.navigateByUrl('home');
         this.service.userLoggedIn = true;
        } 

}
