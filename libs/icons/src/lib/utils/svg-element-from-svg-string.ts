export function svgElementFromSvgString(svgString: string): SVGElement {
  const div: HTMLDivElement = document.createElement('div');
  div.innerHTML = svgString;

  return div.querySelector('svg');
}
