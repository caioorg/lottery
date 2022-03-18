import React from 'react'
import { waitFor } from '@testing-library/react'
import { renderComponent } from '@app/config/test-utils'
import * as serviceLottery from '@app/services/lottery'
import { GET_ALL_TYPES_LOTTERY_SUCCESS } from '@app/__mocks__/allTypesLotterySuccess'
import { GET_ALL_CONTEST_LOTTERY_SUCCESS } from '@app/__mocks__/allContestLotterySuccess'
import Home from '../index'

const mockGetAllTypesLottery = jest.spyOn(serviceLottery, 'getAllTypesLottery')
mockGetAllTypesLottery.mockResolvedValue(GET_ALL_TYPES_LOTTERY_SUCCESS)

const mockGetAllLotteryConstest = jest.spyOn(serviceLottery, 'getAllLotteryContest')
mockGetAllLotteryConstest.mockResolvedValue(GET_ALL_CONTEST_LOTTERY_SUCCESS)

describe('Pages Home', () => {  

  it('should render properly', async () => {
    await waitFor(() => {
      const { container } =  renderComponent(<Home />)
      expect(container).toMatchSnapshot()
    })
  })
})