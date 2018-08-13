import Component from '../Component';
import { IContact } from '../contacts';

export default class ContactLink extends Component {
    constructor() {
        super('contactlink');
    }

    public render(props: IContact) {
        return `
            <span><a href="${props.link}" target="_blank">${props.icon}</a></span>
        `;
    }
}
