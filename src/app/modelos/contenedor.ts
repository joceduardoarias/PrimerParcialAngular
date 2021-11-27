import { Pizza } from "./pizza";

export class Contenedor {
    capacidad:number;
    codigo:string;
    marca:string;
    id:string;
    productos:Pizza[]=[];
    ocupacion:number = 0;
}
