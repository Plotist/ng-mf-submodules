import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
const RemoteReactComponentImport = React.lazy(() => import("secondRhrc/App"));

// const containerElementName = 'myReactComponentContainer';

@Component({
  selector: 'remote-react-component-wrapper',
  template: `<span #remoteContainerElementName></span>`,
  styleUrls: ['./RemoteReactComponent.scss'],
  encapsulation: ViewEncapsulation.None,
})
// tslint:disable-next-line:component-class-suffix
export class RemoteReactComponentWrapper implements OnChanges, OnDestroy, AfterViewInit {
  @ViewChild('remoteContainerElementName', {static: false}) containerRef: ElementRef;

  @Input() public counter = 10;
  @Output() public componentClick = new EventEmitter<void>();

  // constructor() {
  //   this.handleDivClicked = this.handleDivClicked.bind(this);
  // }

  handleDivClicked = () => {
    this.componentClick.emit();
    this.render();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }

  ngOnDestroy() {
    ReactDOM.unmountComponentAtNode(this.containerRef.nativeElement);
  }

  private render() {
    const { counter, containerRef } = this;
    if (!containerRef) {
      return null;
    }

    ReactDOM.render(<div className={'test'}>
      <RemoteReactComponentImport />
    </div>, containerRef.nativeElement);
  }
}
