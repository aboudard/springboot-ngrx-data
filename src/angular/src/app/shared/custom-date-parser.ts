import { NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export class CustomDateParser extends NgbDateParserFormatter {

  readonly DELIMITER = '-';

  parse(value: string): NgbDateStruct {
    let result: NgbDateStruct = null;
    if (value) {
      const date = value.split(this.DELIMITER);
      result = {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10)
      };
    }
    return result;
  }

  format(date: NgbDateStruct): string {
    let result: string = null;
    if (date) {
      result = date.day + this.DELIMITER + date.month + this.DELIMITER + date.year;
    }
    return result;
  }

}
