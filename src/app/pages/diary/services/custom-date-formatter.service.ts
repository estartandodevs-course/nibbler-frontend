import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomDateFormatter extends CalendarDateFormatter {
  public override monthViewColumnHeader({ date, locale }: DateFormatterParams): string {
    // return formatDate(date, 'EEE', locale ?? 'pt-BR');
    const day = formatDate(date, 'E', locale ?? 'pt-BR');
    return day.charAt(0).toUpperCase() + day.slice(1).toLowerCase().replace(/\.$/, '');
  }
}
