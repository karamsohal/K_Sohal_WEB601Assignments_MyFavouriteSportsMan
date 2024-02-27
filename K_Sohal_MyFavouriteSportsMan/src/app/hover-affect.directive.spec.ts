import { ElementRef } from '@angular/core';
import { HoverAffectDirective } from './hover-affect.directive';

describe('HoverAffectDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = {} as ElementRef;
    const directive = new HoverAffectDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});