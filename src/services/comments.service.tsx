import * as _ from 'lodash'
import { CommentInterface } from '../models/comment/comment.interface'
import CommentModel from '../models/comment/comment.model'

export default class CommentService {
  retrieveComments(videoId) : Promise<CommentModel[]> {
    return new Promise((resolve, reject) => {
      try {
        return this.fetchComments(videoId)
          .then((comments :Object[]) => {
            return resolve(_.map(comments, this.mapToComment))
          })
      } catch(error) {
        console.log('Error fetching comments: ', error)
        reject(error)
      }
    })
  }

  private mapToComment(comment :CommentInterface) {
    return new CommentModel(comment)
  }

  //simulation of api request to retrieve comments
  private fetchComments(videoId :string) {
    let allComments = {
      '392590844': [
        {
          author: 'Dr. Baker',
          time: '2020-02-02 08:00:00',
          subject: 'Successfully Presentation',
          comment: 'Many hospitals and clinics accepted to use Meet Blue.'
        },
        {
          author: 'Dr. Romina',
          time: '2020-02-02 14:16:00',
          subject: 'Successfully Presentation',
          comment: "That't great news Dr. Baker. Let's me know to start the Medical Subscription Plan this week to expand Meet Blue."
        },
        {
          author: 'Sr. Smith',
          time: '2020-02-03 10:04:00',
          subject: 'Successfully Presentation',
          comment: "Well done. Great team work!!"
        }
      ]
    }

    return Promise.resolve(allComments[videoId])
  }
}
