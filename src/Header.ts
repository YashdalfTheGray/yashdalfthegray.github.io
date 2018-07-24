import ArrowDown from './ArrowDown';
import Component from './Component';

export default class Header extends Component {
    constructor() {
        super('header');
    }

    public handleMenuArrowClick() {
        const arrowDiv = document.querySelector('.header .anchor-menu-button');
        const anchorMenu = document.querySelector('.anchor-menu');

        if (arrowDiv.classList.contains('activated')) {
            arrowDiv.classList.remove('activated');
            anchorMenu.classList.remove('visible');
        }
        else {
            arrowDiv.classList.add('activated');
            anchorMenu.classList.add('visible');
        }
    }

    public render() {
        const anchors = [
            { name: 'About', anchor: 'anchor_about' },
            { name: 'Projects', anchor: 'anchor_projects' },
            { name: 'Contact', anchor: 'anchor_contact' }
        ];
        const renderedAnchors = anchors
        .map(a => `<a class="header-anchor" href="#${a.anchor}">${a.name}</a>`)
        .join('\n');

        const arrowDown = new ArrowDown();

        return `
            <div class="header flex-row">
                <span class="title">Yash Kulshrestha</span>
                <div class="flex-row h-list anchor-bar">
                    ${renderedAnchors}
                </div>
                <div
                    class="anchor-menu-button"
                    onClick="document.componentRegistry['${this.id}'].handleMenuArrowClick()">
                    ${arrowDown.render()}
                </div>
            </div>
            <div class="anchor-menu flex-column">
                ${renderedAnchors}
            </div>
        `;
    }
}
