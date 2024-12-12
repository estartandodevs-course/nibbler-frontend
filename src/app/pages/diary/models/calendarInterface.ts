export interface IReflexao {
  usuarioId: string;
  reflexaoId: string;
  conteudo: string;
  dataDeCadastro: string;
  emocao: {
    id: string;
    nome: string;
  };
}

export interface IApiResponseReflexoes {
  sucess: boolean;
  data: IReflexao[];
}

export interface IApiResponseReflexao {
  sucess: boolean;
  data: IReflexao;
}
