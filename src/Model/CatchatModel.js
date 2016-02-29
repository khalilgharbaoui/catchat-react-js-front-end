import BaseModel from './BaseModel';
class CatchatModel extends BaseModel {
  defaults() {
    return {miauw: "New Catchat"};
  }
  constructor() {
    super('catchat');
  }
  // toggleAll(checked) {}
  // toggle(resourceToToggle) {}
}

export default CatchatModel;
