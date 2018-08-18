import Component from '../Component';

export default class HeroBanner extends Component {
  constructor() {
  super('herobanner');
  }

  public render() {
  return `
    <div class="hero-banner">
    <img src="../assets/header.jpg" />
    </div>
  `;
  }
}
