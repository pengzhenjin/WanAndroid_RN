import BaseComponent from './BaseComponent';

class BaseContainer extends BaseComponent {
  constructor (props) {
    super(props);
    console.log('BaseContainer props:', props);
  }
}

export default BaseContainer;
