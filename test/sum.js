const should = require('should')
const sum = require('../libraries/sum.js')

describe('#sum', () => {
    // 測試算出來的平均是不是 2.5
    it('cc', done => {
        var total = sum(1, 2)
        total.should.equal(3)
        done()
    })
})