import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safeUrl'
})
export class SafeUrlPipe implements PipeTransform {

  constructor(private sanitized: DomSanitizer) { }

  public transform(value: any) {
    return this.sanitized.bypassSecurityTrustResourceUrl(value);
  }

}
