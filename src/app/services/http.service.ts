//HttpClient API service is used to make communication between front-end web apps with backend services. 
//This communication is done over HTTP protocol. 
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
//Observable module
import { Observable } from 'rxjs';
//Buffer.ts class
import { Buffer } from '../modules/buffer';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  onSubmit() {
    throw new Error('Method not implemented.');
  }
//asp.net web api (the api should be running while consuming from Angular)
  url = 'http://localhost:3000/bufferdetails';  
  //Will invoke BufferRegistrationsController->GetBufferRegistrations()
  //GET->Read records
	  constructor(private http: HttpClient) { }  
	  getAllBuffers(): Observable<Buffer[]> {  
	    return this.http.get<Buffer[]>(this.url );  
	  }  
	  getBufferById(BufferId: number): Observable<Buffer> {  
	    return this.http.get<Buffer>(this.url + '/' + BufferId);  
	  } 
	  // Will invoke BufferRegistrationsController->PostBufferRegistration
	  createBuffer(Buffer: Buffer): Observable<Buffer> {  
	    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
	    return this.http.post<Buffer>(this.url ,  
	    Buffer, httpOptions);  
	  } 
	  //Will invoke BufferRegistrationsController->PutBufferRegistration 
	  updateBuffer(Buffer: Buffer): Observable<Buffer> {  
	    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
	    return this.http.put<Buffer>(this.url + '/'+ Buffer.empid, 
	    Buffer, httpOptions);  
	  }   
	  //Will invoke BufferRegistrationsController->DeleteBufferRegistration
	  deleteBufferById(Bufferid:number): Observable<number> {  
	    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
	    return this.http.delete<number>(this.url + '/DeleteBufferDetails?id=' +Bufferid,  
	 httpOptions);  
	  }  

	   //Will invoke BufferRegistrationsController->DeleteBufferRegistration
	  Login(Buffername:string,Password:string): Observable<Buffer[]> {  
	    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json'}) };  
	    return this.http.request<Buffer[]>(this.url + '/BufferLogin?Buffername=&Password=' +Buffername,Password,  
	 httpOptions);  
	  }  

}
