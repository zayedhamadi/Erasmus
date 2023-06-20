import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent {
constructor(private http: HttpClient, private router: Router) { }
events:any;
getEvents(){
    this.http.get('http://localhost:3000/crudEvents/findAll.php').subscribe(response => {
      this.events = response;
      console.log(this.events);
    });}

    formData: any = {};
  submitForm(formData: any) {
  
    const data = {
      title: formData.title,
      desc: formData.desc,
      date: formData.date,
      place: formData.place,
      id: formData.id
      };
      console.log(data);
  
      const convert = JSON.stringify(data);
    this.http.post('http://localhost:3000/crudEvents/addEvent.php', convert,{responseType:'text'})
      .subscribe(response => {
        
        console.log(response);
       
      });
      this.router.navigateByUrl('/dashboard/listevent');
  }
  deleteEvent(id:number){
    this.http.delete("http://localhost:3000/crudEvents/deleteEvent.php?ref="+id).subscribe(res=>{console.log('delete done');})
    window.location.reload();
  }
}
