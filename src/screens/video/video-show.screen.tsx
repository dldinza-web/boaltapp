import VideoShowView from "./video-show.view"

import GoogleCast from 'react-native-google-cast';

import VimeoService from "../../services/vimeo.service";
import ComponentBase from "../../core/component.base";
import CommentService from "../../services/comments.service";
import CommentModel from "src/models/comment/comment.model";

export default class VideoShowScreen extends ComponentBase {
  private view :VideoShowView
  private commentSrv :CommentService
  private player :any
  private vimeoSrv :VimeoService

  state = {
    isLoadingVideo: false,
    video: {
      source: '',
      thumbnail: '',
      isLocal: false
    },
    comments: []
  }

  constructor(props :Object) {
    super(props)
    this.view = new VideoShowView()

    this.vimeoSrv = new VimeoService()
    this.commentSrv = new CommentService()
  }

  componentDidMount() {
    let videoId = '392590844'
    this.loadingVideo(videoId)
      .then(() => this.loadComments(videoId))
  }

  private loadComments(videoId :string) {
    this.commentSrv.retrieveComments(videoId)
      .then((comments :CommentModel[]) => this.setStateValues({ comments: comments }))
      .catch(error => {
        console.log('error loading comments', error)
      })
  }

  private loadingVideo(videoId :string) {
    return this.setStateValues({ isLoadingVideo: true })
      .then(() => this.vimeoSrv.loadVideo('392590844'))
      .then((video :any) =>
        this.setStateValues({
            video: {
              source: video.videoUrl,
              thumbnailUrl: video.thumbnailUrl,
              isLocal: false
            }
          })
      )
      .then(() => this.setStateValues({ isLoadingVideo: false }))
      .catch(error => {
        console.log('!!!error loading video', error)
        Promise.reject(false)
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
