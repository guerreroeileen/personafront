import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EstadosService {
  private API_SERVER = "http://localhost:8080/estados/";

  constructor(private httpClient: HttpClient) { }


  public getAllEstadosByPais(idPais): Observable<any>{
    return this.httpClient.get(this.API_SERVER+idPais);
  }

}
