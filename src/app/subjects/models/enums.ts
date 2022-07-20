export enum Events {
  CustomerAdded,
  CustomerRemoved,
  CustomerUpdated,
  HttpResponseArrived,
  HttpRequestStarted
}

export class EmitEvent {
  constructor( public name: any, public value?: any){}
}
