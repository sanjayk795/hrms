import { Component, OnInit } from '@angular/core';
import { SubjectService} from '../shared/subject.service'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private subjectService : SubjectService) {
    this.subjectService.sendHeaderSubject(true); 
  }

 ngOnInit() {
 }

}
