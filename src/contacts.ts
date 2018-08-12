import * as svgModule from '*.svg';

import * as email from './icons/email.svg';
import * as github from './icons/github.svg';
import * as googleplus from './icons/googleplus.svg';
import * as linkedin from './icons/linkedin.svg';
import * as steam from './icons/steam.svg';
import * as twitch from './icons/twitch.svg';
import * as twitter from './icons/twitter.svg';
import * as youtube from './icons/youtube.svg';

type SVG = typeof svgModule;

export interface IContact {
    id: string;
    name: string;
    link: string;
    icon: SVG;
}

const contacts: IContact[] = [
    {
        id: 'github',
        name: 'Github',
        link: 'https://github.com/YashdalfTheGray',
        icon: github
    },
    {
        id: 'twitter',
        name: 'Twitter',
        link: 'https://twitter.com/YashdalfTheGray',
        icon: twitter
    },
    {
        id: 'linkedIn',
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/yash-kulshrestha-00847965',
        icon: linkedin
    },
    {
        id: 'steam',
        name: 'Steam',
        link: 'http://steamcommunity.com/id/YashdalfTheGray/',
        icon: steam
        // iconBackground: '#425F99'
    },
    {
        id: 'twitch',
        name: 'Twitch',
        link: 'https://www.twitch.tv/yashdalfthegray',
        icon: twitch
    },
    {
        id: 'youtube',
        name: 'Youtube',
        link: 'https://www.youtube.com/channel/UCWcKiD0E1CyjvY4CSN_Ealw',
        icon: youtube
    },
    {
        id: 'googlePlus',
        name: 'Google+',
        link: 'https://plus.google.com/+YashKulshrestha12',
        icon: googleplus
    },
    {
        id: 'email',
        name: 'Email',
        link: 'mailto:contact@yashkulshrestha.com',
        icon: email
     }
];

export default contacts;
