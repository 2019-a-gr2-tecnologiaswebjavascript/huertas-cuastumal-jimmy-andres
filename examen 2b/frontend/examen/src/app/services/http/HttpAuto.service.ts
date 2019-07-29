import {Injectable} from "@angular/core";
import {HttpEntityService} from "./HttpEntity.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import { Auto } from 'src/app/dto/Auto';


@Injectable()

export class HttpAutoService extends HttpEntityService<Auto>{
    constructor(private readonly _httpClient:HttpClient){
        super(_httpClient,environment.url,"/auto")
    }
}
