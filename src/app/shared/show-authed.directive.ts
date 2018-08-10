import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';


@Directive({ selector: '[showAuthed]' })
export class ShowAuthedDirective implements OnInit {
    private condition: boolean;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {

  }

  ngOnInit() {
      if (window.localStorage.getItem('loggedIn')== "true") {
        this.viewContainer.createEmbeddedView(this.templateRef);
      } else {
        this.viewContainer.clear();
      }
    }

    init (con) {
        if (window.localStorage.getItem('loggedIn')) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }


  @Input() set showAuthed(condition: boolean) {
   
  }

}
