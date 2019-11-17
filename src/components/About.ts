import Component from '../Component';

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
        <p>I work on platform reliability for Amazon ECS by day. I experiment and learn through open-source contributions by night. Docker, Ruby, container orchestration, React, Node.js, Typescript, Express.js, Webpack, Javascript testing, and UI testing are all areas of expertise. Go, Rails, Sinatra, Elm, Vue.js, and devops tooling are all areas of interest.</p>
        <p>I read, game and stream, tinker with electronics and keep up with Ohio State Football as much as I can in my free time.</p>
        <p>Go bucks! O-H!</p>
      </div>
    `;
    /* tslint:enable:max-line-length */
  }
}
