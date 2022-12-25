import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../provider.service';
import {ProviderConfig }from '../shared/providerConfig.model'


@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {

  constructor(private providerService : ProviderService) { }
 provider : ProviderConfig = new ProviderConfig;
  ngOnInit(): void {
    console.log("here")
    this.providerService.getProviderConfig().subscribe(data=>{
      this.provider = data;
      console.log(this.provider.collaborator.primaryEmail)
console.log(this.provider)
    })

    console.log("here3")
  }

}
