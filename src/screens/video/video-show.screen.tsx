import React, { Component } from "react"
import VideoShowView from "./video-show.view"

import GoogleCast from 'react-native-google-cast';

import VimeoService from "../../services/vimeo.service";

export default class VideoShowScreen extends Component {
  private view :VideoShowView
  private player :any
  private vimeoSrv :VimeoService

  state = {
    video: null
  }

  constructor(props :Object) {
    super(props)
    this.view = new VideoShowView()

    this.vimeoSrv = new VimeoService()
  }

  componentDidMount() {
    console.log('!!!component video', this.player)

    this.vimeoSrv.loadVideo('392590844')
      .then((video :any) => {
          console.log('!!!video from Vimeo', video)

          this.setState({
            video: video.videoUrl
          })
      })
      .catch(error => {
        console.log('!!!error loading video')
      })
  }

  setFullScreen(event) {
    console.log('!!!mode fullscreen', event)
    console.log('!!!component video', this)
  }

  videoError(event) {
    console.log('!!!videoError', event)
  }

  onStartAndroidCasting = () => {
    GoogleCast.castMedia({
      mediaUrl: this.state.video.videoUrl,
      imageUrl: this.state.video.thumbnailUrl,
      title: 'Meet Blue',
      subtitle: 'The intelligence that powers ORCA',
      studio: 'Dental Whale',
      streamDuration: 186, // seconds
      contentType: 'video/mp4', // Optional, default is "video/mp4"
      playPosition: 1, // seconds
      customData: {
        // Optional, your custom object that will be passed to as customData to reciever
        customKey: 'customValue',
      },
    })
  }

  render() {
    return this.view.render(this)
  }
}
