import { Component } from "react";

export default class ComponentBase extends Component {

  setStateValue(obj :Object) {
    return new Promise((resolve, reject) => {
      this.setState(obj, () => resolve(this.state))
    })
  }
}
