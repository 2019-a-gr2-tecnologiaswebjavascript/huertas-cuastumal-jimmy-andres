import {Injectable} from "@angular/core";
import {HttpEntityService} from "./HttpEntity.service";
import {Usuario} from "../../dto/Usuario";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable()
export class UsuarioHttpService extends HttpEntityService<Usuario>{
    constructor(private readonly _httpClient:HttpClient){
        super(_httpClient,environment.url,"/Usuario")
    }

}
