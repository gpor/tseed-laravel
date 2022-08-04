


class Base {
  constructor() {
    this.componentName = null
    this.innerData = null
    this.closeCallback = null
    this.closeCallbackPayload = {}
  }
  close() {
    this.innerData = null
    if (this.closeCallback) {
      this.closeCallback(this.closeCallbackPayload)
      this.closeCallback = null
    }
  }
}


class PageModalSml extends Base {
  login(confirmCallback) {
    this.componentName = 'LoginModal'
    this.closeCallback = null
    this.innerData = {
      confirmCallback,
    }
  }
}

export { PageModalSml }