import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { findByUniqContestId, getAllLotteryContest, getAllTypesLottery } from '@app/services/lottery'
import getAllTypesLotterySuccess from '@app/services/__tests__/__data__/getAllTypesLotterySuccess.json'
import getAllLotteryContestSuccess from '@app/services/__tests__/__data__/getAllLotteryContestSuccess.json'
import findByUniqContestIdSuccess from '@app/services/__tests__/__data__/findByUniqContestIdSuccess.json'

const errorData = { error: 'not_found' }

describe('Services Lottery', () => {
  let mock: MockAdapter

  beforeEach(() => {
    mock = new MockAdapter(axios)
  })

  afterEach(() => {
    mock.reset()
  })

  it('should handle list all types lottery', async () => {
    mock.onGet('/loterias').reply(200, getAllTypesLotterySuccess)

    const result = await getAllTypesLottery()
    expect(mock.history.get[0].url).toBe('/loterias')
    expect(result.data).toEqual(getAllTypesLotterySuccess)
    expect(result.status).toBe(200)
  })

  it('should handle error list all types lottery', async () => {
    mock.onGet('/loterias').reply(404, errorData)

    try {
      await getAllTypesLottery()
      expect(mock.history.get[0].url).toBe('/loterias')
    } catch (error: any) {
      expect(error.response.status).toBe(404)
      expect(error.response.data).toEqual(errorData)
    }
  })

  it('should handle list all contest lottery', async () => {
    mock.onGet('/loterias-concursos').reply(200, getAllLotteryContestSuccess)

    const result = await getAllLotteryContest()
    expect(mock.history.get[0].url).toBe('/loterias-concursos')
    expect(result.data).toEqual(getAllLotteryContestSuccess)
    expect(result.status).toBe(200)
  })

  it('should handle error list all types lottery', async () => {
    mock.onGet('/loterias-concursos').reply(404, errorData)

    try {
      await getAllLotteryContest()
      expect(mock.history.get[0].url).toBe('/loterias-concursos')
    } catch (error: any) {
      expect(error.response.status).toBe(404)
      expect(error.response.data).toEqual(errorData)
    }
  })

  it('should handle find by id contest id', async () => {
    mock.onGet('/concursos/1234').reply(200, findByUniqContestIdSuccess)

    const result = await findByUniqContestId('1234')
    expect(mock.history.get[0].url).toBe('/concursos/1234')
    expect(result.data).toEqual(findByUniqContestIdSuccess)
    expect(result.status).toBe(200)
  })

  it('should handle error list all types lottery', async () => {
    mock.onGet('/concursos/1234').reply(404, errorData)

    try {
      await findByUniqContestId('1234')
      expect(mock.history.get[0].url).toBe('/concursos/1234')
    } catch (error: any) {
      expect(error.response.status).toBe(404)
      expect(error.response.data).toEqual(errorData)
    }
  })
})