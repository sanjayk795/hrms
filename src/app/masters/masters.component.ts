import { Component, OnInit } from '@angular/core';
import { SubjectService} from '../shared/subject.service'

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.css']
})
export class MastersComponent implements OnInit {

  constructor(private subjectService : SubjectService) {
    this.subjectService.sendHeaderSubject(true);
  }

 ngOnInit() {
 }

}
