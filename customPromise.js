class MyPromise {

    constructor(cb) {
        this.cb = cb
        this.resolveCbs = []
        this.executeAysnchronously(cb)
        this.isPromise = true
    }

    executeAysnchronously(cb) {
       cb((data) => {
          if (this.resolveCbs.length > 0) {
              const obj = this.resolveCbs[0](data)
              this.resolveCbs.splice(0, 1)
              if (this.resolveCbs.length > 0 && obj && obj.isPromise) {
                  obj.resolveCbs = this.resolveCbs
                  obj.errCb = errCb
                  obj.executeAysnchronously(obj.cb)
              }
          }
          else {
              this.resolveOrRejected = false
              this.handleResolve = true
          }

       }, (err) => {
          //this.errCbs[0](err)
          if (this.errCb) {
              this.errCb(err)
          }
          else {
              this.resolveOrRejected = false
              this.handleRejection = true

          }
       })
    }

    then(cb) {
        this.resolveCbs.push(cb)
        if (this.handleResolve) {
            this.executeAysnchronously(this.cb)
            this.handleResolve = false
        }
        return this
    }

    catch(errCb) {
        this.errCb = errCb
        if (this.handleRejection) {
            this.executeAysnchronously(this.cb)
            this.handleRejection = false
        }
    }
}


module.exports = MyPromise
