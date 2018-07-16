import Component from './Component';

export default class HeroBanner implements Component {
    public render() {
        return `
            <div class="hero-banner">
                <img src="../assets/header.jpg" />
            </div>
        `;
    }
}
