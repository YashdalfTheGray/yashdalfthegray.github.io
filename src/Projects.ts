import Component from './Component';

import Loading from './Loading';

export default class Projects extends Component {
    public renderProjects(projects) {
        return `
            <div class="projects-section">
                <p>These are some of my pet projects on Github!</p>
            </div>
        `;
    }

    public renderFallback() {
        return `
            <div class="projects-fallback">
                You can find my active pet projects on my&nbsp;
                <a href="https://github.com/YashdalfTheGray">Github page</a>!
            </div>
        `;
    }

    public render() {
        const loading = new Loading();

        return `
            <h2 class="section-heading">
                <a class="anchor-link" name="projects">Projects</a>
            </h2>
            <div class="projects-container">
                ${loading.render()}
            </div>
        `;
    }
}
