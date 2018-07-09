import IComponent from './Component';
import Header from './Header';

export default class App implements IComponent {
    public render() {
        const header = new Header();
        return `
            <div class="app-container">
                ${header.render()}
            </div>
        `;
    }
}
