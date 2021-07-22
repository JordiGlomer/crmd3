
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss'],
})
export class ClienteFormComponent implements OnInit {
  @Input() formGroup!: FormGroup;
  @Input() error!: any;
  @Input() editable!: boolean;
  @Output() submitEvt = new EventEmitter();

  constructor() {
    console.log(this.formGroup?.value);
    this.editable = false;
  }

  submit() {
    this.submitEvt.emit(this.formGroup.value);

    this.formGroup.reset();
  }

  ngOnInit(): void {}
}
