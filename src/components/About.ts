import Component from '../Component';

import './About.scss';

export default class About extends Component {
  constructor() {
    super('about');
  }

  public render() {
    /* tslint:disable:max-line-length */
    return `
      <h2 class="section-heading">
        <a class="anchor-link" name="about">About</a>
      </h2>
      <div class="about-section">
        <p>Hi! I'm Yash, a Buckeye living in Seattle.</p>
        <p>I work for <a href="https://aws.amazon.com/route53/">Amazon Route53</a> and previously worked for <a href="https://aws.amazon.com/ecs/" target="_blank">Amazon Elastic Container Service</a>. I experiment and learn through open-source contributions in my free time. I most commonly do stuff related to Docker, Ruby, container orchestration, Golang, Node.js, Typescript. I also have a homelab setup that I keep tinkering with.</p>
        <p>I read, game and stream, tinker with electronics and 3D printing, and keep up with Ohio State Football as much as I can in my free time.</p>
        <p>Go bucks! O-H!</p>
      </div>
    `;
    /* tslint:enable:max-line-length */
  }
}
