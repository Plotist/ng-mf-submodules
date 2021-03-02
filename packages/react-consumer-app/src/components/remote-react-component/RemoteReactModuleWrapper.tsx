import { AfterContentInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';


@Component({
  selector: 'app-remote-module-test',
  template: '<div #vc></div>',
})
export class RemoteReactModuleWrapperComponent implements AfterContentInit {

  @ViewChild('vc', {read: ElementRef, static: true})
  vc: ElementRef;

  ngAfterContentInit(): void {
    import('secondRhrc/AppModule');

    const element = document.createElement('app-module-test');
    this.vc.nativeElement.appendChild(element);

  }
}
