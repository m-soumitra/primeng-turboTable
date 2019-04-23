import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `  <div class="menu">
      <ng-template [ngTemplateOutlet]="contentTemplateRef"></ng-template>
    </div>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent {
  @Input() name: string;
}
