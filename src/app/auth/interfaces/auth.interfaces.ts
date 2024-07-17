export interface LoginDataDto{
    email: string;
    password: string;
}

export interface LoginResponseDto{
  id: string;
  email: string;
  token: string;
  roles: string[];
}

export interface RegisterDataDto{
  email: string;
  password: string;
  fullName: string;
  document: string;
  country: string;
  phoneNumber: string;
  phoneNumber2: string;
  sponsor: string;
}
