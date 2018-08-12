import Component from '../Component';
import contacts, { IContact } from '../contacts';
import ContactLink from './ContactLink';

interface IContactState {
    contacts: IContact[];
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
            <div class="contacts-list">
                ${this.state.contacts.map(c => (new ContactLink()).render(c)).join('\n')}
            </div>
        `;
    }
}
