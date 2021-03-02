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
import {HideableStateDisplay} from 'src/components/hideable-state-display/HideableStateDisplay';
import * as React from 'react';

import * as ReactDOM from 'react-dom';

// const containerElementName = 'myReactComponentContainer';

@Component({
  selector: 'app-no-mf-react-component-wrapper',
  template: `<span #containerElementName></span>`,
  styleUrls: ['./HideableStateDisplay.scss'],
  encapsulation: ViewEncapsulation.None,
})
// tslint:disable-next-line:component-class-suffix
export class NoMfReactComponentWrapper implements OnChanges, OnDestroy, AfterViewInit {
  @ViewChild('containerElementName', {static: false}) containerRef: ElementRef;

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

    ReactDOM.render(<div className={'i-am-classy'}>
      <HideableStateDisplay
        counter={counter}
        onClick={this.handleDivClicked}
      />
    </div>, containerRef.nativeElement);
  }
}
