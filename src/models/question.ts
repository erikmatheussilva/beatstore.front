export type QuestionStatus =
  | 1
  | 2
  | 3
  | 4
  | 5;

// QODELESS [MODEL {QUESTION}] - Definicao da Entidade
export interface Question {
  id?: string;
  content: string;
  createdAt?: Date;
  deletedAt?: Date;
  excluded?: boolean;
  quiz?: null | string;
  quizId: string;
  status: number;
  step: number;
  title: string;
  updatedAt?: Date;
  weight: number;
}
