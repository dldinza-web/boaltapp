import VideoShowView from "./video-show.view"

import GoogleCast from 'react-native-google-cast';

import VimeoService from "../../services/vimeo.service";
import ComponentBase from "../../core/component.base";
import CommentService from "../../services/comments.service";
import CommentModel from "src/models/comment/comment.model";
import { Animated } from "react-native";

export default class VideoShowScreen extends ComponentBase {
  private view :VideoShowView
  private commentSrv :CommentService
  private player :any
  private vimeoSrv :VimeoService

  state = {
    isLoadingVideo: false,
    isVideoFullScreen: false,
    video: {
      source: '',
      thumbnail: '',
      isLocal: false,
    },
    comments: [],
    animations: {
      videoFadeValue: new Animated.Value(0),
      commentsInitValue: new Animated.Value(0)
    }
  }

  constructor(props :Object) {
    super(props)
    this.view = new VideoShowView()

    this.vimeoSrv = new VimeoService()
    this.commentSrv = new CommentService()
  }

  componentDidMount() {
    this.loadingContent()
  }

  private loadingContent() {
    let videoId = '392590844'

    this.loadingVideo(videoId)
      .then(() => this.loadComments(videoId))
  }

  onEnterFullscreen() {
    this.setStateValues({ isVideoFullScreen: true })
  }

  onExitFullscreen() {
    this.setStateValues({ isVideoFullScreen: false })
      .then(() => this.loadingContent())
  }

  private startCommentAnimation() {
    Animated.timing(this.state.animations.commentsInitValue, {
      toValue: 1,
      duration: 2 * 1000,
      useNativeDriver: true
    }).start()
  }

  private startVideoFadeAnimation() {
    Animated.timing(this.state.animations.videoFadeValue, {
      toValue: 1,
      duration: 2.5 * 1000,
      useNativeDriver: true
    }).start()
  }

  private loadComments(videoId :string) {
    this.commentSrv.retrieveComments(videoId)
      .then((comments :CommentModel[]) => this.setStateValues({ comments: comments }))
      .then(() => this.startCommentAnimation())
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
      .then(async() => this.startVideoFadeAnimation())
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
