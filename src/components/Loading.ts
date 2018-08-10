import Component from '../Component';
import * as refresh from '../icons/refresh.svg';

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
