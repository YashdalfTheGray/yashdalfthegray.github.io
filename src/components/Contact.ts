import Component from '../Component';
import contacts, { IContactList } from '../contacts';

interface IContactState {
    contacts: IContactList;
}

export default class Contact extends Component {
    public state: IContactState;

    constructor() {
        super('contact');
        this.state = { contacts };
    }

    public render() {
        return `
            <h2 class="section-heading">
                <a class="anchor-link" name="contact">Contact</a>
            </h2>
            <div class="contacts-container">
                Get in touch with me!
            </div>
        `;
    }
}
