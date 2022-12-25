import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProviderConfig } from './shared/providerConfig.model';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http :HttpClient) { }
  url = 'http://testio.pouch.club/admin/provider/config';
  token = 'c197f03626f2d3cea25a838839c995cd13cafd56059e17fcedc73d19b4ace442350a7e5e2884bd59752e3607bc4b2d80537328f00c7e8dbf95343efee94cde48:bdf0b5322313784344f7b6e85cd436e0ad476526dac87067b91820d8b227fc307d562bdcfb55a0fe817641aae288577c366296049345c90e30f427812417922d:a86174de9e38bf3065597dfe0cf11cd623040e81f478e47bead866f33ff9294d65d635d594f8bd6a7877c410f020972fb7466a215d4b9074de547a929f16d4cc:f18a3ca1482b3bd41b84031fc44bf358745f517a9c34bc4b5e15495d0958073640442688e3a9c9fab1e7f7b2dc2efc116761a277d80fca5606c2dc00b8386e83';
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  })
  getProviderConfig():Observable<ProviderConfig>{
    console.log("hereserv")
    return this.http.get<ProviderConfig >(this.url, {headers: this.headers})
  }
}
