import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {}

  apiurl='http://localhost:3000/user';

  getAll() {
    return this.http.get(this.apiurl);
  }

  getAllByRole() {
    return this.http.get('http://localhost:3000/role');
  }

  getByCode(code: any) {
    return this.http.get(this.apiurl+'/'+code);
  }

  isLoggedIn() {
    return sessionStorage.getItem('username') != null;
  }

  getUserRole() {
    return sessionStorage.getItem('userrole') != null?sessionStorage.getItem('userrole')?.toString():'';
  }

  updateUser(id:any, inputdata:any){
    return this.http.put(this.apiurl+'/'+id,inputdata);
  }

  registerUser(inputdata:any){
    return this.http.post(this.apiurl,inputdata)
  }

}
