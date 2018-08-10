import { Component, OnInit } from '@angular/core';
import { SubjectService} from '../shared/subject.service'

@Component({
  selector: 'app-newc',
  templateUrl: './newc.component.html',
  styleUrls: ['./newc.component.css']
})
export class NewcComponent implements OnInit {

  constructor(private subjectService : SubjectService) {
    this.subjectService.sendHeaderSubject(true); 
  }

 ngOnInit() {
 }

}
