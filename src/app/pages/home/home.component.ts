import { Component, OnInit } from '@angular/core';
import { ValoresSwService } from '../../services/valores-sw.service'
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  valores: any

  constructor(private valoresSwService: ValoresSwService, private router: Router) { }

  async ngOnInit() {
   let result =  (await this.valoresSwService.tipos()).datos
    this.valores = Object.keys(result).map((key) => result[key]);
  }


  irDetalle = (buscar: string) => {
    localStorage.setItem('select', buscar)
    this.router.navigateByUrl('detalle')
  }

}
