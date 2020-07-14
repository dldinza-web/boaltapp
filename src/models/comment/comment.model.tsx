import { CommentInterface } from "./comment.interface";
import Model from "../model";

export default class CommentModel extends Model implements CommentInterface {
  public author = '';
  public time = '';
  public subject = '';
  public comment = '';

  constructor(comment :CommentInterface) {
    super ()

    this.setAttributes(comment)
  }
}
