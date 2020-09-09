import { Injectable } from '@angular/core';
import { ValoresService } from '../../api/api/api'


@Injectable({
  providedIn: 'root'
})
export class ValoresSwService {

  constructor(private valoresService : ValoresService) { }

  valores =  async(tipo: string, fecha: string) => {
    let datos = {
      tipo,
      fecha
    }
    return await this.valoresService.valoresPost(datos).toPromise();
  }


  valoresTipo =  async(tipo: string) => {
    let datos = {
      tipo
    }
    return await this.valoresService.valoresTipoPost(datos).toPromise();
  }


  tipos =  async() => await this.valoresService.tiposGet().toPromise()
}
