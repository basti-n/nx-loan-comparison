import { mockSvgString } from '../test-data';
import { svgElementFromSvgString } from './svg-element-from-svg-string';

describe('svgElementFromSvgString', () => {
  const svgStringMock = mockSvgString;
  it('should return an svg element based on the provided string', () => {
    const result = svgElementFromSvgString(svgStringMock);
    expect(result instanceof SVGElement).toBeTruthy();
  });
});
