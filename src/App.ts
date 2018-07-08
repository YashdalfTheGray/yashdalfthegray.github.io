import IComponent from './Component';

export default class App implements IComponent {
    public render() {
        return `
            <h1 class="page-heading">Yash Kulshrestha</h1>
        `;
    }
}
