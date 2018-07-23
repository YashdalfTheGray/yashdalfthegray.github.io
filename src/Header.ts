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
        const anchors = ['About', 'Projects', 'Contact'];
        const arrowDown = new ArrowDown();

        return `
            <div class="header flex-row">
                <span class="title">Yash Kulshrestha</span>
                <div class="flex-row h-list anchor-bar">
                    ${anchors.map(a => `<span>${a}</span>`).join('\n')}
                </div>
                <div
                    class="anchor-menu-button"
                    onClick="document.componentRegistry['${this.id}'].handleMenuArrowClick()">
                    ${arrowDown.render()}
                </div>
            </div>
            <div class="anchor-menu flex-column">
                ${anchors.map(a => `<span>${a}</span>`).join('\n')}
            </div>
        `;
    }
}
