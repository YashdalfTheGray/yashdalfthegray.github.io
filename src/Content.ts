import Component from './Component';

export default class Content implements Component {
    public render() {
        return `
            <div class="app-content">
                <img src="../assets/header.jpg" />
            </div>
        `;
    }
}
