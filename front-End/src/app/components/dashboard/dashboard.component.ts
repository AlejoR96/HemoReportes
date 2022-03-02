import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buildPage(){
    Swal.fire({
        title: 'En Desarrollo',
        text: 'Disculpe las molestias pronto estara disponible',
        imageUrl: 'assets/img/buildPage.svg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        confirmButtonColor: "#2EE59D"
      })
  }
}
