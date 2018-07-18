import IComponent from './Component';

export default class ArrowDown implements IComponent {
    public render() {
        return `
            <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px" y="0px" width="24px" height="24px"
                viewBox="0 0 24 24"
                enable-background="new 0 0 24 24"
                xml:space="preserve">
                <path d="M7.41,8.59L12,13.17l4.59-4.58L18,10l-6,6l-6-6L7.41,8.59z"/>
                <path fill="none" d="M0,0h24v24H0V0z"/>
            </svg>
        `;
    }
}
