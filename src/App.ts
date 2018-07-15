import IComponent from './Component';
import Header from './Header';
import HeroBanner from './HeroBanner';

export default class App implements IComponent {
    public render() {
        const header = new Header();
        const heroBanner = new HeroBanner();

        return `
            <div class="flex-column">
                ${header.render()}
                ${heroBanner.render()}
            </div>
        `;
    }
}
