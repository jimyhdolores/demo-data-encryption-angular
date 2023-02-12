import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LocalStorageService } from './storage/local-storage.service';
import { encrypt } from './util/util-encrypt';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	constructor(private _formBuilder: FormBuilder, private _localStorageService: LocalStorageService) {}

	formGroup = this._formBuilder.nonNullable.group({
		names: [''],
		claim: ['']
	});

	formDataInStorage?: IForm;

	clickSend(): void {
		this._localStorageService.setItem('form', this.formGroup.value);

		const formStorage = this._localStorageService.getItem<IForm>('form');
		this.formDataInStorage = formStorage!;
	}
}

interface IForm {
	names: '';
	claim: '';
}
