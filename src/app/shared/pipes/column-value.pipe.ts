import { Pipe, PipeTransform } from '@angular/core';
import { TableColumn } from '../interfaces/table-column';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'columnValue'
})
export class ColumnValuePipe implements PipeTransform {

  transform(row: any, column: TableColumn): unknown {
    let displayValue = row[column.dataKey];

    switch (column.dataType)
    {
      case 'date':
        if(column.formatt !== undefined ) {
          displayValue = new DatePipe('en').transform(displayValue, column.formatt);
        }

      break;

      case 'object':
        const arrayKeys = column.dataKey.split('.');
        let currentValue: any;

        arrayKeys.forEach((key) => {
          if (currentValue === undefined) {
            if( row[key] )
              currentValue = row[key];
            return;
          }

          currentValue = currentValue[key];
        });

        displayValue = currentValue;
      break;

      default:
      break;
    }


    return displayValue;
  }

}
