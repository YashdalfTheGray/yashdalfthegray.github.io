import ArrowDown from './ArrowDown';
import Component from './Component';

export default class Header extends Component {
    constructor() {
        super('Header');
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
                <div class="anchor-button">
                    ${arrowDown.render()}
                </div>
            </div>
        `;
    }
}
