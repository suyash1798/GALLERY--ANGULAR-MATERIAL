import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-add-a-new',
  templateUrl: './add-a-new.component.html',
  styleUrls: ['./add-a-new.component.css']
})
export class AddANewComponent implements OnInit {

  private AddForm: FormGroup;

  constructor(private postservice: PostService) { }

  ngOnInit() {
    this.CreateForm();
  }

  private CreateForm() {
    this.AddForm = new FormGroup({
      'title': new FormControl(null, Validators.required),
      'url': new FormControl(null, Validators.required)
  });
  }

  public ADD() {
    // this.Post.name = this.AddForm.get('title').value.toString();
    // this.Post.url = this.AddForm.get('url').value.toString();
    // console.log(this.Post.url);
    this.postservice.getADD_Post().next({name: this.AddForm.get('title').value.toString(), url: this.AddForm.get('url').value.toString()});
  }

}
