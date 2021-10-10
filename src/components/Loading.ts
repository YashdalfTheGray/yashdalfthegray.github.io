import Component from '../Component';
import * as refresh from '../icons/refresh.svg';

import './Loading.scss';

export default class Loading extends Component {
  constructor() {
    super('loading');
  }

  public render() {
    return `
    <div class="loading-container">
    ${refresh}&nbsp;<span>Loading</span>
    </div>
  `;
  }
}
