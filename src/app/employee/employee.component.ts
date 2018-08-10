import { Component, OnInit } from '@angular/core';
import { SubjectService} from '../shared/subject.service'

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private subjectService : SubjectService) {
    this.subjectService.sendHeaderSubject(true);
   }

  ngOnInit() {
  }

}
