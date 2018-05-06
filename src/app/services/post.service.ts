import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class PostService {

  private ADD_Post: Subject;
  private REMOVE_ALL: Subject;
  constructor() {
    this.ADD_Post = new Subject();
    this.REMOVE_ALL = new Subject();
  }

  public getADD_Post(): Subject {
    return this.ADD_Post;
  }

  public getREMOVE_ALL(): Subject{
    return this.REMOVE_ALL;
  }

}
