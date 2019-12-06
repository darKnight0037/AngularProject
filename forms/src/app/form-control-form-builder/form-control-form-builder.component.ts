import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control-form-builder',
  templateUrl: './form-control-form-builder.component.html',
  styleUrls: ['./form-control-form-builder.component.css']
})
export class FormControlFormBuilderComponent implements OnInit {
  profileForm = this.fb.group({
    firstName: ['',Validators.required],
    lastName: [''],
    address: this.fb.group({
      street: [''],
      city: [''],
      state: [''],
      zip: ['']
    }),
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
