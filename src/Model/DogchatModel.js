import BaseModel from './BaseModel';
class DogchatModel extends BaseModel {
  defaults() {
    return {woef: "New Dogchat"};
  }
  constructor() {
    super('dogchat');
  }
  // toggleAll(checked) {}
  // toggle(resourceToToggle) {}
}

export default DogchatModel;
