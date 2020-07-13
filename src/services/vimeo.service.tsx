export default class VimeoService {
  loadVideo(videoId :string) {
    return fetch(`https://player.vimeo.com/video/${videoId}/config`)
      .then(resp => resp.json())
      .then(async(resp) => {
        return {
          thumbnailUrl: resp.video.thumbs['640'],
          videoUrl: resp.request.files.hls.cdns[resp.request.files.hls.default_cdn].url,
          video: resp.video
        }
      })
      .catch(error => {
        console.log('!!!error from Vimeo', error)
        throw error
      })
  }
}
