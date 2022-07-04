import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
            url="http://localhost:3000/posts"
            post = "http://192.168.12.10/custregistration/api/Customers/DataAdd"
            get = "http://192.168.12.10/custregistration/api/Customers"
            put = "http://192.168.12.10/custregistration/api/Customers/DataUpdate?customerid="
            delet = "http://192.168.12.10/custregistration/api/Customers/DataDelete?customerid="
            getById = "http://192.168.12.10/custregistration/api/Customers/getdataById?customerid="

constructor(private http: HttpClient) { }

getdata(){
          return this.http.get<any>(this.url)
          }
saveData(data:any){
            return this.http.post<any>(this.url,data)
          }

getList() {
           let httpHeaders = new HttpHeaders({
          // httpHeaders.append('Token','1234567890')
          // let httpHeaders=new HttpHeaders({
           'Authorization': '1234567890'
            })
            httpHeaders = httpHeaders.set('Token', '12345')
            return this.http.get<any>(this.get, { headers: httpHeaders })
          }

addData(data: any) {
             return this.http.post<any>(this.post, data);
          }

deletelist(id:number) {
             return this.http.delete<any>(this.delet+id)
          }

update(data: any, id: number) {
            return this.http.put<any>(this.put + id, data)
          }

get isLoggedIn(): boolean { 
          const user = JSON.parse(sessionStorage.getItem("currentusername")!);
          return user !== null ? true : false;
          }   
getdash(){
          return this.http.get<any>(this.url)
         }        
}
