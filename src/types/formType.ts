export type Form = {
  name: string;
  email: string;
  roast: string;
  method: string;
  recommendation: string;
  region: string;
  flavor: string;
  howOften: string;
};

export type NextFormat = {
  id: number;
  h2: string;
  p: string;
  inputType: string;
  fieldName: string;
  answerChoice: {
    choice: boolean;
    answers?: Array<string>;
    min?: number;
    max?: number;
  };
};
