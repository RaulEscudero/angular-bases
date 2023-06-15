import { Character } from '../../interfaces/character.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  public emitIndex(index:string|undefined):void{
    console.log("indice: "+index);
    this.onDeleteCharacter.emit(index);
  }
}
