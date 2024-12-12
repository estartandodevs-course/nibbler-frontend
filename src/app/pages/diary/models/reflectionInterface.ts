export interface IReflection {
  usuarioId: string;
  conteudo: string;
  emocaoId: string;
}
export interface IPutReflection {
  conteudo: string;
  emocaoId: string;
}

export interface ISaveReflectionResponse {
  success: boolean;
  message: string;
  data?: {
    reflectionId: string;
  };
}
export interface IGetReflection {
  success: boolean;
  data?: {
    reflectionId: string;
  };
}
