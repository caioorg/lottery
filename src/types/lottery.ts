export interface IResponseAllTypes {
  id: number,
  nome: string
}

export interface IResponseLotteryContest {
  concursoId: string,
  loteriaId: number
}

export interface IResponseFindByIdContest {
  id: string,
  loteria: string | number
  numeros: string[],
  data: string
}

export interface IStateLotteryForm {
  idLottery: string
}

export interface IStateContest {
  id: string | number,
  loteria: number | string,
  numeros: string[],
  data: string
}
