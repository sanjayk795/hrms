import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SubjectService {
    private headerSubject = new BehaviorSubject <any>({'value': false});

    sendHeaderSubject(auth) {
        this.headerSubject.next({ value: true });
    }

    getHeaderSubject(): Observable<any> {
        return this.headerSubject.asObservable();
    }
}
