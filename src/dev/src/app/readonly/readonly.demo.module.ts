/*
 * Copyright (c) 2018-2019 Porsche Informatik. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ClarityModule, ClrFormsModule } from '@clr/angular';

import { ReadonlyDemo } from './readonly.demo';
import { ClrAddonsModule } from '@porscheinformatik/clr-addons';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    ClrFormsModule,
    RouterModule.forChild([{ path: '', component: ReadonlyDemo }]),
    ClrAddonsModule,
  ],
  declarations: [ReadonlyDemo],
  exports: [ReadonlyDemo],
})
export class ReadonlyDemoModule {}
