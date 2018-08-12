import Component from '../Component';
import { IContact } from '../contacts';

export default class ContactLink extends Component {
    constructor() {
        super('contactlink');
    }

    public render(props: IContact) {
        return `
            <span
                style="border-color: ${props.iconBackground}; background: ${props.iconBackground}">
                ${props.icon}
            </span>
        `;
    }
}
