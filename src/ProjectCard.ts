import Component from './Component';

import { IGithubRepo } from './types';

export default class ProjectCard extends Component {
    constructor() {
        super('projectcard');
    }

    public render(props: IGithubRepo) {
        return `
            <div class="project-card" id="project-card-${props.id}">
                <span>${props.name}</span>
            </div>
        `;
    }
}
