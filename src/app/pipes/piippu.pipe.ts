import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'piippu',
})
export class PiippuPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let koko: string;
    const temp = value.split('.');

    // split-funktiolla tiedosotnnimi (value) osiin,
    // tallenna tulos nimellä temp

    switch (args) {
      case 'small': {
        koko = '160';
        break;
      }
      case 'medium': {
        koko = '320';
        break;
      }
      case 'large': {
        koko = '640';
        break;
      }
    }
    // switch/case lause:
    // jos args on small, koko 160
    // jos medium , koko 320
    // jos large, koko = 640

    return temp[0] + '-tn' + koko + '.png';
  }

}
