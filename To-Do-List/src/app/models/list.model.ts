import { Task } from "./task.model";

export interface List {
    id : number,
    idUser : number,
    name : string,
    tasks : Task []
}