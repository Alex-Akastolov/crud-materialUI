import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ProductInterface} from "../shared/interfaces/product";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  url: string = environment.url

  constructor(private http: HttpClient) {
  }

  createData(product: ProductInterface): Observable<ProductInterface> {
    return this.http.post<ProductInterface>(this.url, product)
  }

  readData() {
    return this.http.get<any>(this.url)
  }

  updateData(data: ProductInterface, id: number): Observable<ProductInterface> {
    return this.http.put<ProductInterface>(`${this.url}/${id}`, data)
  }

  deleteData(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }
}
