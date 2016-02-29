import BaseModel from './BaseModel';
class DogchatModel extends BaseModel {
  defaults() {
    return {miauw: "New Dogchat"};
  }
  constructor() {
    super('dogchat');
  }
  // toggleAll(checked) {}
  // toggle(resourceToToggle) {}
}

export default DogchatModel;
