import {Injectable} from "@angular/core";
import {HttpEntityService} from "./HttpEntity.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import { Factura } from 'src/app/dto/Factura';


@Injectable()

export class HttpFacturaService extends HttpEntityService<Factura>{
    constructor(private readonly _httpClient:HttpClient){
        super(_httpClient,environment.url,"/factura")
    }
}
