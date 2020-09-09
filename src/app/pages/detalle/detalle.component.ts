import { Component, OnInit } from '@angular/core';
import { ValoresSwService } from '../../services/valores-sw.service'



@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.less']
})
export class DetalleComponent implements OnInit {

  select: any
  public lineChartData: Array<any> = [{data: []}];
  public lineChartLabels: Array<any> = [];

  public loading = false;

  constructor(private valoresSwService: ValoresSwService) { }

  async ngOnInit() {
    this.loading = true;
    this.select = localStorage.getItem('select')
    this.lineChartData = [{ data: await this.getValores(), label: this.select}]
    this.lineChartLabels = await this.getFechas()
    this.loading = false;
  }

  getDatos = async () => await this.valoresSwService.valoresTipo(this.select)
  
  getValores = async () => {
    let valores = await this.getDatos();
    let valor = valores.datos['values'];
    return   Object.values(valor);
  }


  getFechas = async () =>{
    let fechas = await this.getDatos();
    let fechas2 = fechas.datos['values'];
    let fecha2 =  Object.keys(fechas2);
    let fechaFormato = fecha2.map((fecha)=> new Date(Number.parseInt(fecha) * 1000).toLocaleDateString("en-US"))
    return fechaFormato
  }

}
