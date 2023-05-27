import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  @Output() selectedPageChanged=new EventEmitter<string>();

  onNavigationChanged(selectedPage:string) {
    
    console.log(selectedPage);
    this.selectedPageChanged.emit(selectedPage);
  }

}