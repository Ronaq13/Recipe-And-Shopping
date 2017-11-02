import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  @Output() showSection = new EventEmitter<string>();

  onSelect(section: string) {
      this.showSection.emit(section);
  }
}
