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
  errorMessage: string;
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

export type IsError = {
  message: string;
  error: boolean;
};

export type Coffee = {
  name: string;
  region: string;
  country: string;
  flavor_profile: Array<string>;
  roast_level: string;
  processing_method: string;
  recommendation: string;
};
