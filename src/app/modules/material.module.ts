import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatMenuModule,
		MatButtonModule,
		MatDialogModule,
		MatToolbarModule,
		MatIconModule,
		MatFormFieldModule,
		MatInputModule
	],
	exports: [
		MatMenuModule,
		MatButtonModule,
		MatDialogModule,
		MatToolbarModule,
		MatIconModule,
		MatFormFieldModule,
		MatInputModule
	]
})
export class MaterialModule { }
