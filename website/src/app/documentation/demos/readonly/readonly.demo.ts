/*
 * Copyright (c) 2018 Porsche Informatik. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ClarityDocComponent } from '../clarity-doc';

const HTML_CHECKBOX_EXAMPLE = `
<clr-checkbox-container readonly>
    ...
</clr-checkbox-container>

<clr-checkbox-container readonly show-only-selected="true">
    ...
</clr-checkbox-container>
`;

const HTML_RADIOBUTTON_EXAMPLE = `
<clr-radiobutton-container readonly>
    ...
</clr-radiobutton-container>

<clr-radiobutton-container readonly show-only-selected="true">
    ...
</clr-radiobutton-container>
`;

const HTML_RADIO_EXAMPLE_DANGER = `
<clr-checkbox-container readonly class="readonly-danger">
    ...
</clr-checkbox-container>
`;

const HTML_READONLY_CONDITIONAL = `
<clr-checkbox-container [attr.readonly]="shouldCheckboxesBeReadOnly || null">
...
</clr-checkbox-container>
`;

const HTML_COMBOBOX_EXAMPLE = `
<clr-combobox-container [readOnly]="readonly">
...
</clr-combobox-container>
`;

const HTML_DATALIST_EXAMPLE = `
<clr-datalist-container [readOnly]="readonly">
...
</clr-datalist-container>
`;

const HTML_SELECT_EXAMPLE = `
<clr-select-container [readOnly]="readonly">
...
</clr-select-container>
`;

@Component({
  selector: 'clr-readonly-demo',
  templateUrl: './readonly.demo.html',
  host: {
    '[class.content-area]': 'true',
    '[class.dox-content-panel]': 'true',
  },
})
export class ReadonlyDemo extends ClarityDocComponent {
  htmlCheckboxExample = HTML_CHECKBOX_EXAMPLE;
  htmlRadiobuttonExample = HTML_RADIOBUTTON_EXAMPLE;
  htmlRadioExampleDanger = HTML_RADIO_EXAMPLE_DANGER;
  htmlReadonlyConditional = HTML_READONLY_CONDITIONAL;
  htmlComboboxExample = HTML_COMBOBOX_EXAMPLE;
  htmlDatalistExample = HTML_DATALIST_EXAMPLE;
  htmlSelectExample = HTML_SELECT_EXAMPLE;

  radioValue: number = 1;
  checkValue1: boolean = true;
  checkValue2: boolean;
  checkValue3: boolean = true;
  readonly = true;
  myOption = { name: 'Option1' };
  options = [{ name: 'Option1' }, { name: 'Option2' }, { name: 'Option3' }];
  value = '';
  selectedOption: any;

  constructor() {
    super('readonly');
  }
}
