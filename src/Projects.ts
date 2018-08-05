import Component from './Component';

import { IRepoOrError } from './types';

import Loading from './Loading';
import ProjectCard from './ProjectCard';

interface IProjectState {
    projectDetails: IRepoOrError[];
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
            // TODO - yashdalfthegray 8/1 error logic because github throttles are real
            this.state.projectDetails = await Promise.all(projects.map(async (p) => {
                const response = await fetch(`https://api.github.com/repos/yashdalfthegray/${p}`);
                return response.json();
            }));

            projectsContainer.innerHTML = this.renderProjects(this.state.projectDetails);
        }
    }

    public renderFallback() {
        return `
            <div class="projects-fallback">
                You can find my active pet projects on my&nbsp;
                <a href="https://github.com/YashdalfTheGray">Github page</a>!
            </div>
        `;
    }

    public renderProjects(projects: IRepoOrError[]) {
        const toShow = projects.filter(p => !p.message);

        if (toShow.length === 0) {
            return this.renderFallback();
        }

        return `
            <div class="projects-section">
                <p>These are some of my pet projects on Github!</p>
                <div class="projects-list">
                    ${projects.map(p => (new ProjectCard()).render(p)).join('\n')}
                </div>
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
