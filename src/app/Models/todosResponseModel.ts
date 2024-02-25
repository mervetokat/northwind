import { ResponseModel } from "./responseModel";
import { Todos } from "./todos";

export interface TodosResponseModel extends ResponseModel{
    data:Todos[]
   
}