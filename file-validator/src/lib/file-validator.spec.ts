import { fileValidator } from './file-validator'

describe('fileValidator', () => {
  it('should work', () => {
    expect(fileValidator()).toEqual('file-validator')
  })
})
