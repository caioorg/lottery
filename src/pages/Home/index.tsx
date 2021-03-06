import React, { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form'
import Branding from '@app/config/assets/logo.svg'
import { getAllLotteryContest, getAllTypesLottery, findByUniqContestId } from '@app/services/lottery'
import { IStateContest, IStateLotteryForm } from '@app/types/lottery'
import {
  SectionLottery,
  Container,
  TitleLottery,
  Select,
  Contest,
  InfoContest,
  SectionLotteryNumbers,
  NumbersLottery,
  ContentNumbers,
  Instructions,
  ContentTitle,
  ContestWrapper,
  ContestWrapperMobile
} from './styles'
import Loading from '@app/components/Loading';

const Home: React.FC = () => {
  const [isLoading, setLoading] = useState<boolean>(false)
  const [typeLottery, setTypeLottery] = useState<{ id: number, nome: string}[]>([])
  const [lotteryContest, setLotteryContest] = useState<{ loteriaId: number, concursoId: string }[]>([])
  const [contest, setContest] = useState<IStateContest>({ data: '', id: '', loteria: '', numeros: []})
  const { register, watch } = useForm<IStateLotteryForm>({
    defaultValues: { idLottery: '' }
  })

  useEffect(() => {
    async function initialState() {
      setLoading(true)
      try {
        const typesLottery = await getAllTypesLottery()
        const lotteryConstest = await getAllLotteryContest()

        if (typesLottery.status === 200 && typesLottery.data.length > 0) {
          setTypeLottery(typesLottery.data)
        }        

        if (lotteryConstest.status === 200 && lotteryConstest.data.length > 0) {
          setLotteryContest(lotteryConstest.data)
        }
      } catch (error) {
        // console.log(error)
      } finally {
        setLoading(false)
      }
    }

    initialState()
  }, [])

  useEffect(() => {
    const idLottery = watch('idLottery')

    async function findByContestId(id?: string) {
      try {
        setLoading(true)
        const { data, status } = await findByUniqContestId(id)
        if(status === 200 && data) setContest(data)  
      } finally {
        setLoading(false)
      }
      
    }
    
    if (idLottery) {
      const contest = lotteryContest?.find(item => String(item.loteriaId) === idLottery)

      findByContestId(contest?.concursoId)
    }

  }, [watch('idLottery'), lotteryContest])

  const nameLottery = useMemo(() => {
    const name = typeLottery.find(item => String(item.id) === watch('idLottery'))
    return name?.nome || ''
  }, [watch('idLottery')])

  return (
    <Container>
      {isLoading && <Loading /> }
      <SectionLottery name={nameLottery.replaceAll(' ', '-')}>
        <form>
          <Select data-testid='idLottery' {...register('idLottery')}>
            <option value=''></option>
            {typeLottery.map(item => (
              <option key={item.id} value={item.id}>{item.nome}</option>
            ))}
          </Select>  
        </form>
        
        {nameLottery && contest && (
          <>
            <ContentTitle>
              <img src={Branding}  />
              <TitleLottery>{nameLottery}</TitleLottery>
            </ContentTitle>

            <ContestWrapper>
              <Contest>concurso</Contest>
              <InfoContest>
                {contest?.id || ''} - {contest?.data && new Date(contest?.data).toLocaleDateString() || ''}
              </InfoContest>
            </ContestWrapper>

            <ContestWrapperMobile>
              <Contest>Concurso N?? {contest?.id || ''}</Contest>
            </ContestWrapperMobile>
          </>
        )}
        
      </SectionLottery>
      <SectionLotteryNumbers>
        <ContentNumbers>
          {contest.numeros.map((item: string) => <NumbersLottery data-testid={`number-${item}`} key={item}>{item}</NumbersLottery>)}
        </ContentNumbers>
        <Instructions>Este sorteio ?? meramente ilustrativo e n??o possui nenhuma liga????o com a CAIXA.</Instructions>
      </SectionLotteryNumbers>   
    </Container>
  )
}

export default Home;