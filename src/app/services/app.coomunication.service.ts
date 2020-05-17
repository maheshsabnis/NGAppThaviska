import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  // the event that will be emitted by sender and
  // will be subscribed by the receiver
    emitValue: EventEmitter<number>;
    emitSearchValue: EventEmitter<string>;
    emittedCustIds:EventEmitter<Array<number>>;

    constructor(){
       this.emitValue = new EventEmitter<number>();
       this.emitSearchValue =new EventEmitter<string>();
       this.emittedCustIds=new EventEmitter<Array<number>>();
    }
    // method that emits event. This method will be called
    // by sender
    onEmiteValue(data: number): void {
        this.emitValue.emit(data);
    }
    onEmitSearch(data:string):void
    {
      this.emitSearchValue.emit(data);
    }
    onEmitIds(data:number[]):void{
      this.emittedCustIds.emit(data);
    }
}
