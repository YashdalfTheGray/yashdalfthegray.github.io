import Component from './Component';

export default class Contact extends Component {
    constructor() {
        super('contact');
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
