import styled from "styled-components";
import SideBarSvg from '../../config/assets/sidebar.svg'
import SideBarMobileSvg from '../../config/assets/sidebar-mobile.svg'
import { pixelToRem } from '../../styles/pxToRem'
import { device } from '../../styles/responsive'

interface TypeLottery {
  [key: string]: string
}

const type: TypeLottery = {
  'mega-sena': "var(--mega-sena)",
  quina: 'var(--corner)',
  'lotofácil': 'var(--easyLotto)',
  'lotomania': 'var(--lotoMania)',
  'timemania': 'var(--teamMania)',
  'dia-de-sorte': 'var(--luckDay)'
}

export const Container = styled.main`
  display: flex;
  height: 100%;

  @media ${device.mobileS} {
    display: block;
    height: auto;
    width: 100%;
  }
`
interface SectionLotteryProps {
  name?: string
}


export const SectionLottery = styled.section<SectionLotteryProps>`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #FFF;
  background: ${(props) => props.name ? type[props.name]: '#000'};
  padding: ${pixelToRem(92)};
  mask: url(${SideBarSvg}) no-repeat;
  width: 35%;

  @media ${device.mobileS} {
    width: 100%;
    mask: url(${SideBarMobileSvg}) no-repeat 50%;
    align-items: center;
    padding: ${pixelToRem(15)};
    justify-content: space-evenly;
    min-height: ${pixelToRem(340)};
  }
`

export const TitleLottery = styled.h1`
  font-weight: bold;
  font-size: ${pixelToRem(30)};
  text-transform: uppercase;
`

export const Select = styled.select`
  border-radius: 4px;
  min-width: ${pixelToRem(215.91)};
  min-height: ${pixelToRem(45.2)};
  padding: ${pixelToRem(12)} ${pixelToRem(23)};
  text-transform: uppercase;
  font-weight: 500;
  font-size: ${pixelToRem(15)};
  color: #333333;
  border: 0;
`

export const Contest = styled.p`
  font-weight: 500;
  font-size: ${pixelToRem(14)};
  margin-bottom: ${pixelToRem(14.42)};
  text-transform: uppercase;
`
export const InfoContest = styled.p`
  font-weight: 700;
  font-size: ${pixelToRem(20)}
`

export const SectionLotteryNumbers = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${pixelToRem(35)};
  position: relative;
  width: 75%;

  @media ${device.mobileS} {
    width: 100%;
    padding: 0 ${pixelToRem(10)};
    flex-direction: column;
    justify-content: space-evenly;
    min-height: ${pixelToRem(360)};
  }
`

export const NumbersLottery = styled.h2`
  font-weight: 700;
  font-size: ${pixelToRem(27)};
  color: #333333;
  width: ${pixelToRem(111.2)};
  height: ${pixelToRem(106.36)};
  border-radius: 50%;
  background: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${device.mobileS} {
    width: ${pixelToRem(66)};
    height: ${pixelToRem(66)};
    font-size: ${pixelToRem(20)};
  }
`

export const ContentNumbers = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${pixelToRem(35)};
  max-width: ${pixelToRem(900)};
  flex-wrap: wrap;
  
  @media ${device.mobileS} {
    gap: ${pixelToRem(20)};
    margin: ${pixelToRem(40)} 0 0;
  }
`

export const Instructions = styled.p`
  position: fixed;
  bottom: ${pixelToRem(90)};

  @media ${device.mobileS} {
    position: initial;
    font-size: ${pixelToRem(14)};
    text-align: center;
    margin-bottom: ${pixelToRem(40)};
  }
`

export const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  gap: ${pixelToRem(16)};

  @media ${device.mobileS} {
    flex-direction: column;
  }
`

export const ContestWrapper = styled.div`
  @media ${device.mobileS} {
    display: none;
  }
`
export const ContestWrapperMobile = styled.div`
  display: none;

  @media ${device.mobileS} {
    display: flex;
  }
`