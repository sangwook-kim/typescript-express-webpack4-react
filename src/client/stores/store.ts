import {observable, action} from 'mobx';
import {createContext} from 'react';

export class CountStore {
  @observable count: number;

  constructor(initCount?: number) {
    this.count = initCount || 0;
  }

  @action.bound
  inc() {
    this.count++;
  }

  @action.bound
  dec() {
    this.count--;
  }
}

export const CountCtx = createContext<CountStore | null>(null);
