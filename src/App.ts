import Component from './Component';

import About from './About';
import Header from './Header';
import HeroBanner from './HeroBanner';
import Projects from './Projects';

export default class App extends Component {
    constructor() {
        super('app');
    }

    public render() {
        const header = new Header();
        const heroBanner = new HeroBanner();
        const about = new About();
        const projects = new Projects();

        return `
            <div class="flex-column">
                ${header.render()}
                ${heroBanner.render()}
                ${about.render()}
                ${projects.render()}
            </div>
        `;
    }
}
