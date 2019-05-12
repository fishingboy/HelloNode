const should = require('should')
const echo = require('../libraries/echo.js')

describe('#echo', () => {
    // 測試算出來的平均是不是 2.5
    it('cc', done => {
        var total = echo()
        total.should.equal(123)
        done()
    })
})