import React, { Component } from "react"
import VideoShowView from "./video-show.view"

export default class VideoShowScreen extends Component {
  private view :VideoShowView

  state = {
    videoTime: '00:00'
  }

  constructor(props :Object) {
    super(props)
    this.view = new VideoShowView()
  }

  componentDidMount() {
    this.setState({
      videoTime: '00:04'
    })
  }

  render() {
    return this.view.render(this)
  }
}
