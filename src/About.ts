import Component from './Component';

export default class About extends Component {
    public render() {
        /* tslint:disable:max-line-length */
        return `
            <h2 class="section-heading" name="anchor_about">About</h2>
            <div class="about-section">
                <p>Hi! I'm Yash, a Buckeye living in Seattle.</p>
                <p>I maintain an AngularJS webapp by day, experiment and learn through open-source contributions by night. React, Vue.js, Node.js, Typescript, Express.js, Webpack, Javascript testing and UI testing are all areas of expertise. Docker, container orchestration, Go, Ruby, Rails, Sinatra and Elm are all areas of interest.</p>
                <p>I read, game and stream, tinker with electronics and keep up with Ohio State Football as much as I can in my free time.</p>
                <p>Go bucks! O-H!</p>
            </div>
        `;
        /* tslint:enable:max-line-length */
    }
}
