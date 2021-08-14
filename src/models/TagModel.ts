// import { User } from './UserModel';

// export interface LoginInput {
//   credential: String;
//   password: String;
// }

// export interface LoginOutput {
//   token: string;
//   User: User;
// }

// export interface Login {
//   token?: string;
//   messageError?: string;
// }

// export type LoginHashCookie = {
//   token: string;
// };

export enum TagStatus {
  HIDE = 'HIDE',
  ACTIVE = 'ACTIVE',
}

export enum TagType {
  SYSTEM = 'SYSTEM',
  ADDITION = 'ADDITION',
}

export interface SearchTagInput {
  key: string;
  status: TagStatus[];
}
