import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(private _formBuilder: FormBuilder) {}

	formGroup = this._formBuilder.nonNullable.group({
		names: [''],
		claim: ['']
	});

	formDataInStorage?: IForm;

	clickSend(): void {}
}

interface IForm {
	names: '';
	claim: '';
}
