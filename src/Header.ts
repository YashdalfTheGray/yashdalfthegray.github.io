import IComponent from './Component';

export default class Header implements IComponent {
    public render() {
        return `
            <div class="header flex-row">
                <span class="title">Yash Kulshrestha</span>
                <div class="flex-row h-list anchor-bar">
                    <span>About</span>
                    <span>Projects</span>
                    <span>Contact</span>
                </div>
            </div>
        `;
    }
}
