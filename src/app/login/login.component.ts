import { Component, OnInit } from '@angular/core';
import { SubjectService} from '../shared/subject.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private subjectService : SubjectService, private router: Router,) {
    //window.localStorage['loggedIn'] = false;
    //this.subjectService.sendHeaderSubject(true);
  }

  ngOnInit() {
    //this.subjectService.sendHeaderSubject(true);
  }

  doLogin(){
      window.localStorage['loggedIn'] = true;
      this.subjectService.sendHeaderSubject(true);
      this.router.navigateByUrl('/dashboard')
  }

}
