import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoriaPai'
})
export class CategoriaPaiPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let categoria = '';
    if (value != undefined && value != null) {
      categoria = value.nome
    }

    return categoria;
  }

}
