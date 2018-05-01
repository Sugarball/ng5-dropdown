import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  optionList = [
    'Clinical Database',
    'Service Line Analytics',
    'Saving actualyzer/Supplies',
    'Cost and Quality Explorer',
    'Pharmacy Actualyzer/Rx'
  ];
  selectedList = [
    'Service Line Analytics',
    'Saving actualyzer/Supplies',
  ]
  onUpdate(selectedList) {
    console.log('selectedList', selectedList)
    this.selectedList = selectedList
  }
}
