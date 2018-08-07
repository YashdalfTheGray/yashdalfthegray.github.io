import Component from './Component';

interface IContactState {
    contacts: Array<{ name: string, link: string }>;
}

export default class Contact extends Component {
    public state: IContactState;

    constructor() {
        super('contact');
        this.state = {
            contacts: [
                { name: 'Github', link: 'https://github.com/YashdalfTheGray' },
                { name: 'Twitter', link: 'https://twitter.com/YashdalfTheGray' },
                { name: 'LinkedIn', link: 'https://www.linkedin.com/in/yash-kulshrestha-00847965' },
                { name: 'Steam', link: 'http://steamcommunity.com/id/YashdalfTheGray/' },
                { name: 'Twitch', link: 'https://www.twitch.tv/yashdalfthegray' },
                { name: 'Youtube', link: 'https://www.youtube.com/channel/UCWcKiD0E1CyjvY4CSN_Ealw' },
                { name: 'Google+', link: 'https://plus.google.com/+YashKulshrestha12' },
                { name: 'Email', link: 'mailto:contact@yashkulshrestha.com' }
            ]
        };
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
