import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
  providers: [NgbDropdownConfig]
})
export class DropdownComponent implements OnInit {

  @Input() options: String[] = [];
  @Input() selected: String[] = [];
  @Output() onUpdate = new EventEmitter<any>();
  ownOptions = [];
  allSelected = false;
  
  constructor(config: NgbDropdownConfig) {
    // config.autoClose = false;
  }
  ngOnInit() {
    this._initOption('')
  }

  _initOption(selected) {
    this.ownOptions = this.options.map(item => ({
      value: item,
      selected: (selected || this.selected).indexOf(item) > -1
    }))
    this.checkAll()
  }
  
  dropdownClose(open) {
    this._initOption('')
  }
  applyUpdate() {
    let updated = this.ownOptions.filter(item => item.selected).map(item => item.value)
    this.onUpdate.emit(updated)
    setTimeout(() => this._initOption(updated), 10)
  }
  getName() {
    let _selected = this.ownOptions.filter(item => item.selected)
    if (_selected.length === 0) return 'Select 1 or more'
    if (_selected.length === 1) return _selected[0][`value`]
    return _selected.length + ' Selected'
  }

  checkAll() {
    let _checked = this.ownOptions.length === this.ownOptions.filter(item => item.selected).length
    this.allSelected = _checked
  }
  onSelectAll(e) {
    console.log(e.currentTarget.checked)
    // let _allSelected = this.ownOptions.length === this.ownOptions.filter(item => item.selected).length
    let _allSelected = e.currentTarget.checked
    if (!_allSelected) {
      this.ownOptions = this.ownOptions.map(item => ({...item, selected: false}))
    } else {
      this.ownOptions = this.ownOptions.map(item => ({...item, selected: true}))
    }
    this.checkAll()
  }
}
