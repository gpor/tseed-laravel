


class Base {
  constructor() {
    this.componentName = null
    this.innerData = null
    this.closeCallback = null
    this.closeCallbackPayload = {}
    this.isSmall = false
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
  constructor() {
    super()
    this.isSmall = true
  }
  login(registering) {
    this.componentName = 'LoginModal'
    this.closeCallback = null
    this.innerData = {
      registeringInit: registering,
    }
  }
}

export { PageModalSml }
