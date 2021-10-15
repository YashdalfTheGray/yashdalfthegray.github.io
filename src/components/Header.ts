import Component from '../Component';
import * as arrowDown from '../icons/arrowdown.svg';

import './Header.scss';

export default class Header extends Component {
  constructor() {
    super('header');
  }

  public handleMenuArrowClick() {
    const header = document.querySelector('.header');
    const arrowDiv = document.querySelector('.header .anchor-menu-button');
    const anchorMenu = document.querySelector('.anchor-menu');

    if (arrowDiv.classList.contains('activated')) {
      arrowDiv.classList.remove('activated');
      anchorMenu.classList.remove('visible');
      header.classList.remove('no-bottom-margin');
    } else {
      arrowDiv.classList.add('activated');
      anchorMenu.classList.add('visible');
      header.classList.add('no-bottom-margin');
    }
  }

  public render() {
    const anchors = [
      { name: 'About', href: '#about', external: false },
      { name: 'Projects', href: '#projects', external: false },
      { name: 'Contact', href: '#contact', external: false },
      {
        name: 'Blog',
        href: 'https://medium.com/@yash.kulshrestha',
        external: true,
      },
    ];
    const renderedAnchors = anchors
      .map(
        (a) =>
          `<a class="header-anchor" href="${a.href}" ${
            a.external ? 'target="_blank"' : ''
          }>${a.name}</a>`
      )
      .join('\n');

    return `
      <div class="header">
        <span class="title">Yash Kulshrestha</span>
        <div class="anchor-bar">
          ${renderedAnchors}
        </div>
        <div
          class="anchor-menu-button"
          onClick="${this.callClassFunction('handleMenuArrowClick')}">
          ${arrowDown}
        </div>
      </div>
      <div class="anchor-menu">
        ${renderedAnchors}
      </div>
    `;
  }
}
