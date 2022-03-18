import { api } from './api'
import config from '@app/config'
import { Response } from '@app/types/response'
import {
  IResponseAllTypes,
  IResponseLotteryContest,
  IResponseFindByIdContest
} from '@app/types/lottery'

export const getAllTypesLottery = async (): Promise<Response<IResponseAllTypes[]>> => {
  try {
    return await api(config.baseUrlRequest).get('/loterias')
  } catch (error) {
    return Promise.reject(error)
  }
}

export const getAllLotteryContest = async ():
  Promise<Response<IResponseLotteryContest[]>> => {
  try {
    return await api(config.baseUrlRequest).get('/loterias-concursos')
  } catch (error) {
    return Promise.reject(error)
  }
}

export const findByUniqContestId = async (
  id?: string
): Promise<Response<IResponseFindByIdContest>> => {
  try {
    return await api(config.baseUrlRequest).get(`/concursos/${id}`)
  } catch (error) {
    return Promise.reject(error)
  }
}