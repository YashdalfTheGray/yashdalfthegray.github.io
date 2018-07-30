import Component from './Component';

import Loading from './Loading';

interface IProjectState {
    projectDetails: object[];
}

export default class Projects extends Component {
    public state: IProjectState;

    constructor(projects: string[]) {
        super('projects');
        this.state = {
            projectDetails: []
        };

        setTimeout(() => this.getProjectDetails.bind(this, projects)());
    }

    public async getProjectDetails(projects: string[]) {
        const projectsContainer = document.querySelector('div.projects-container');

        if (!window.fetch) {
            projectsContainer.innerHTML = this.renderFallback();
            return;
        }
        else {
            this.state.projectDetails = await Promise.all(projects.map(async (p) => {
                const response = await fetch(`https://api.github.com/repos/yashdalfthegray/${p}`);
                return response.json();
            }));

            projectsContainer.innerHTML = this.renderProjects(this.state.projectDetails);
        }
    }

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
