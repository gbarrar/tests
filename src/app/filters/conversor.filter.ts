import {Pipe, PipeTransform} from "@angular/core";

@Pipe(
  {name: 'conversor'}
)

export class ConversorFilter implements PipeTransform{
  transform(val1: string, val2: string){
    return parseInt(val1)*parseInt(val2);
  }
}
