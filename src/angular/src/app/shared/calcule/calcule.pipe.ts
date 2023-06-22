import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe de calcul pour vérifier qu'un pipe est moins gourmand
 * qu'une fonction de composant appelée dans un template
 */
@Pipe({
  name: 'calcule'
})
export class CalculePipe implements PipeTransform {
  /**
   * Fonction transform : calcul idiot sur nombre
   * @param {number} value
   * @param {any} args
   * @returns {number} la valeur calculée
   */
  transform(value: number, args?: any): number {
    console.log('update');
    return value + 12;
  }
}
