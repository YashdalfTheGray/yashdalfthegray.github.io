import Component from '../Component';

import { IGithubRepo } from '../types';

export default class ProjectCard extends Component {
constructor() {
    super('projectcard');
  }

  public render(props: IGithubRepo) {
    const { id, name, description, html_url, language } = props;
    return `
      <div class="project-card" id="project-card-${id}">
        <a href="${html_url}" target="_blank">
          <span class="card-heading">${name}</span>
          <span class="card-description">${description}</span>
          <span class="card-language">${language}</span>
        </a>
      </div>
    `;
  }
}
