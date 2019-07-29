import {Injectable} from "@angular/core";
import {HttpEntityService} from "./HttpEntity.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import { Conductor } from 'src/app/dto/Conductor';


@Injectable()

export class HttpConductorService extends HttpEntityService<Conductor>{
    constructor(private readonly _httpClient:HttpClient){
        super(_httpClient,environment.url,"/conductor")
    }
}
