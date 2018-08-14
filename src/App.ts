import Component from './Component';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import Projects from './components/Projects';

interface IAppState {
    projectsList: string[];
}

export default class App extends Component {
    public state: IAppState;

    constructor() {
        super('app');
        this.state = {
            projectsList: [
                'hue-remote',
                'onboard',
                'light-control',
                'docker-dashboard',
                'auto-ngtemplate-loader',
                'cluster-cleanup'
            ]
        };
    }

    public render() {
        const header = new Header();
        const heroBanner = new HeroBanner();
        const about = new About();
        const projects = new Projects(this.state.projectsList);
        const contact = new Contact();
        const footer = new Footer();

        return `
            <div class="flex-column">
                ${header.render()}
                ${heroBanner.render()}
                ${about.render()}
                ${projects.render()}
                ${contact.render()}
                ${footer.render()}
            </div>
        `;
    }
}
