import Component from './Component';

import { IGithubRepo } from './types';

export default class ProjectCard extends Component {
constructor() {
        super('projectcard');
    }

    public render(props: IGithubRepo) {
        const { id, name, html_url } = props;
        return `
            <div class="project-card" id="project-card-${id}">
                <a href="${html_url}" target="_blank">
                    <span>${name}</span>
                </a>
            </div>
        `;
    }
}
