import Component from './Component';

export default class Projects extends Component {
    public render() {
        return `
            <h2 class="section-heading">
                <a class="anchor-link" name="projects">Projects</a>
            </h2>
            <div class="projects-section">
                <p>These are some of my pet projects on Github!</p>
            </div>
        `;
    }
}
