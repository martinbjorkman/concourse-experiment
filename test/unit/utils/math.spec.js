import { add } from '../../../src/utils/math'

describe('math', () => {
    describe('add', () => {
        it('should return the sum of a and b', () => {
            expect(add(5, 5)).toEqual(10)
        })
    })
})
