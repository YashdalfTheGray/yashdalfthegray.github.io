import IComponent from './Component';

export default class Header implements IComponent {
    public render() {
        return `
            <div class="title">Yash Kulshrestha</div>
        `;
    }
}
