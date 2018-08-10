import { Component, OnInit } from '@angular/core';
import { SubjectService} from './shared/subject.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 private display = null;
 //private _self;
  constructor( private subjectService : SubjectService) {
    window.localStorage['loggedIn'] = false;
    //this.subjectService.sendHeaderSubject(true);
  }

  ngOnInit() {
    console.log("===================");
    const _self = this;
    _self.subjectService.getHeaderSubject().subscribe(function (res) {
      _self.display = res.value;
  });
  }

  
  title = 'app works!';
}
