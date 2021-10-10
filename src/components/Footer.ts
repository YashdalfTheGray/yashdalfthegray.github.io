import Component from '../Component';

import './Footer.scss';

export default class Footer extends Component {
  constructor() {
    super('footer');
  }

  public render() {
    /* tslint:disable:max-line-length */
    return `
      <div class="footer">
        <p>This website uses Github Pages for hosting, SASS and Typescript for the code but no frontend frameworks. It is also open source and the code can be found <a href="https://github.com/YashdalfTheGray/yashdalfthegray.github.io" target="_blank">here</a>.</p>
      </div>
    `;
    /* tslint:enable:max-line-length */
  }
}
