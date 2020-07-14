import * as _ from 'lodash'

export default abstract class Model {
  protected setAttributes(obj :Object) {
    for (let prop in obj)
      if (typeof prop == 'string')
        this[prop] = obj[prop]

  }
}
