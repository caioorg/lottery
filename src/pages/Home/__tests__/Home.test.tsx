import React from 'react'
import { waitFor, act, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderComponent } from '@app/config/test-utils'
import * as serviceLottery from '@app/services/lottery'
import { GET_ALL_TYPES_LOTTERY_SUCCESS } from '@app/__mocks__/allTypesLotterySuccess'
import { GET_ALL_CONTEST_LOTTERY_SUCCESS } from '@app/__mocks__/allContestLotterySuccess'
import { FIND_BY_UNIQUE_CONTEST_ID_SUCCESS } from '@app/__mocks__/findByUniqContestIdSuccess'
import Home from '../index'

const mockGetAllTypesLottery = jest.spyOn(serviceLottery, 'getAllTypesLottery')
mockGetAllTypesLottery.mockResolvedValue(GET_ALL_TYPES_LOTTERY_SUCCESS)

const mockGetAllLotteryConstest = jest.spyOn(serviceLottery, 'getAllLotteryContest')
mockGetAllLotteryConstest.mockResolvedValue(GET_ALL_CONTEST_LOTTERY_SUCCESS)

const mockFindByUniqContestId = jest.spyOn(serviceLottery, 'findByUniqContestId')

describe('Pages Home', () => {  

  it('should render properly', async () => {
    let component: any
   
    await act(async() => {
      component = renderComponent(<Home />)
    })

    expect(component.container).toMatchSnapshot()
  })

  it('should handle change select lottery', async () => {   
    mockFindByUniqContestId.mockResolvedValue(FIND_BY_UNIQUE_CONTEST_ID_SUCCESS)

    await act(async() => {
      renderComponent(<Home />)
    })

    await act(async () => {
      userEvent.selectOptions(screen.getByTestId('idLottery'), ['0'])
    })

    expect(screen.getByTestId('idLottery')).toHaveValue('0')

    expect(screen.getByTestId('number-31')).toBeTruthy()
    expect(screen.getByTestId('number-32')).toBeTruthy()
    expect(screen.getByTestId('number-39')).toBeTruthy()
    expect(screen.getByTestId('number-42')).toBeTruthy()
    expect(screen.getByTestId('number-43')).toBeTruthy()
    expect(screen.getByTestId('number-51')).toBeTruthy()
  })
})