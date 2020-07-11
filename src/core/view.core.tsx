import { Component } from "react";

export default abstract class ViewCore {
  protected component :Component

  constructor(component :Component) {
    this.component = component;
  }
}
