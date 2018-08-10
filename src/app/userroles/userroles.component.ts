import { Component, OnInit } from '@angular/core';
import { SubjectService} from '../shared/subject.service'

@Component({
  selector: 'app-userroles',
  templateUrl: './userroles.component.html',
  styleUrls: ['./userroles.component.css']
})
export class UserrolesComponent implements OnInit {

  constructor(private subjectService : SubjectService) {
    this.subjectService.sendHeaderSubject(true); 
  }

 ngOnInit() {
 }

}
