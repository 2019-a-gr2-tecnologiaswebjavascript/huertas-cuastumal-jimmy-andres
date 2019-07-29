import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";


export class HttpEntityService<Entity>{
    protected url:string = "";
    protected modelo:string = "";
    constructor(protected readonly httpClient:HttpClient, url:string,modelo:string){
        this.url = url
        this.modelo = modelo
    }

    crear(nuevoRegistro:Entity):Observable<Entity>{

        const url = `${this.url}${this.modelo}`;
        return this.httpClient
            .post<Entity>(url,nuevoRegistro)
    }

    actualizar( id:string,registroActualizado):Observable<void>{
        const url = `${this.url}${this.modelo}/${id}`

        return this.httpClient.put<void>(url,registroActualizado)

    }
    borrar(id:string):Observable<void>{
        const url = `${this.url}${this.modelo}/${id}`;
        return this.httpClient.delete<void>(url)
    }

    buscarPorId(id:string):Observable<Entity>{
        const url = `${this.url}${this.modelo}/${id}`;
        return this.httpClient.get<Entity>(url)


    }

    buscarTodos():Observable<Entity[]>{
        const url = `${this.url}${this.modelo}`;
        return this.httpClient
            .get<Entity[]>(url)

    }
    buscarQuery(query: String):Observable<Entity[]>{
        const url = `${this.url}${this.modelo}?${query}`;
        return this.httpClient
            .get<Entity[]>(url)

    }

}
