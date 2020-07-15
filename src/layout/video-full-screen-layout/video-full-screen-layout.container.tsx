import { Component } from "react";

import VideoFullScreenLayoutView from './video-full-screen-layout.view'

export default class VideoFullScreenLayout extends Component {
  private view :VideoFullScreenLayoutView

  constructor(props :any) {
    super(props)

    this.view = new VideoFullScreenLayoutView()
  }

  render() {
    return this.view.render(this)
  }
}
