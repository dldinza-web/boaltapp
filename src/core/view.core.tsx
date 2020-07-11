export default abstract class ViewCore {
  protected props :any
  protected attrs :any

  constructor(props :any, attrs :any) {
    this.props = props;
    this.attrs = attrs;
  }
}
