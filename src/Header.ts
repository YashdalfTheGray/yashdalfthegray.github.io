import ArrowDown from './ArrowDown';
import Component from './Component';

export default class Header extends Component {
    constructor() {
        super('header');
    }

    public handleMenuArrowClick() {
        const arrowDiv = document.querySelector('.header .anchor-menu-button');

        if (arrowDiv.classList.contains('activated')) {
            arrowDiv.classList.remove('activated');
        }
        else {
            arrowDiv.classList.add('activated');
        }
    }

    public render() {
        const arrowDown = new ArrowDown();

        return `
            <div class="header flex-row">
                <span class="title">Yash Kulshrestha</span>
                <div class="flex-row h-list anchor-bar">
                    <span>About</span>
                    <span>Projects</span>
                    <span>Contact</span>
                </div>
                <div
                    class="anchor-menu-button"
                    onClick="document.componentRegistry['${this.id}'].handleMenuArrowClick()">
                    ${arrowDown.render()}
                </div>
            </div>
        `;
    }
}
