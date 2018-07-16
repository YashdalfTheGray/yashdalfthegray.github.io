import Component from './Component';

export default class HeroBanner implements Component {
    public render() {
        return `
            <div class="hero-banner">
                <img class="hero-background" src="../assets/header.jpg" />
                <img class="mugshot" src="https://avatars1.githubusercontent.com/u/3102848?v=4" />
            </div>
        `;
    }
}
