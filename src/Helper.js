
export default class TVar {
    constructor(valx) {
        this.x = valx
      }
      get x() {
        return this.x
      }
      toggle()
      {
          this.x = !this.x
      }
}