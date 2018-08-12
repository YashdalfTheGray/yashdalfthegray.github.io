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
    iconBackground: string;
}

const contacts: IContact[] = [
    {
        id: 'github',
        name: 'Github',
        link: 'https://github.com/YashdalfTheGray',
        icon: github,
        iconBackground: '#FFF'
    },
    {
        id: 'twitter',
        name: 'Twitter',
        link: 'https://twitter.com/YashdalfTheGray',
        icon: twitter,
        iconBackground: '#81C5D4'
    },
    {
        id: 'linkedIn',
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/yash-kulshrestha-00847965',
        icon: linkedin,
        iconBackground: '#0077B5'
    },
    {
        id: 'steam',
        name: 'Steam',
        link: 'http://steamcommunity.com/id/YashdalfTheGray/',
        icon: steam,
        iconBackground: '#425F99'
    },
    {
        id: 'twitch',
        name: 'Twitch',
        link: 'https://www.twitch.tv/yashdalfthegray',
        icon: twitch,
        iconBackground: '#FFF'
    },
    {
        id: 'youtube',
        name: 'Youtube',
        link: 'https://www.youtube.com/channel/UCWcKiD0E1CyjvY4CSN_Ealw',
        icon: youtube,
        iconBackground: '#F00'
    },
    {
        id: 'googlePlus',
        name: 'Google+',
        link: 'https://plus.google.com/+YashKulshrestha12',
        icon: googleplus,
        iconBackground: '#F44336'
    },
    {
        id: 'email',
        name: 'Email',
        link: 'mailto:contact@yashkulshrestha.com',
        icon: email,
        iconBackground: '#24ABD6'
     }
];

export default contacts;
