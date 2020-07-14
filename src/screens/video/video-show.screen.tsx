import VideoShowView from "./video-show.view"

import GoogleCast from 'react-native-google-cast';

import VimeoService from "../../services/vimeo.service";
import ComponentBase from "../../core/component.base";

export default class VideoShowScreen extends ComponentBase {
  private view :VideoShowView
  private player :any
  private vimeoSrv :VimeoService

  state = {
    isLoadingVideo: false,
    video: {
      source: '',
      thumbnail: '',
      isLocal: false
    }
  }

  constructor(props :Object) {
    super(props)
    this.view = new VideoShowView()

    this.vimeoSrv = new VimeoService()
  }

  componentDidMount() {
    this.loadingVideo('392590844')
  }

  loadingVideo(videoId :string) {
    this.setStateValue({ isLoadingVideo: true })
      .then(() => this.vimeoSrv.loadVideo('392590844'))
      .then((video :any) =>
        this.setStateValue({
            video: {
              source: video.videoUrl,
              thumbnailUrl: video.thumbnailUrl,
              isLocal: false
            }
          })
      )
      .then(() => this.setStateValue({ isLoadingVideo: false }))
      .catch(error => {
        console.log('!!!error loading video')
      })
  }

  onStartAndroidCasting = () => {
    GoogleCast.castMedia({
      mediaUrl: this.state.video.source,
      imageUrl: this.state.video.thumbnailUrl,
      title: 'Meet Blue',
      subtitle: 'The intelligence that powers ORCA',
      studio: 'Dental Whale',
      streamDuration: 186,
      contentType: 'video/mp4',
      playPosition: 1
    })
  }

  render() {
    return this.view.render(this)
  }
}
