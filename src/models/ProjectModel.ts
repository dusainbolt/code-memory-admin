import { Experience } from './ExperienceModel';
import { IField, OptionSelect } from './FieldModel';
import { Tag } from './TagModel';
import { User } from './UserModel';

export enum ProjectStatus {
  INACTIVE = 'INACTIVE',
  ACTIVE = 'ACTIVE',
}

export interface Project {
  createBy?: string;
  createAt?: string;
  id?: string;
  name?: string;
  nameEN?: string;
  description?: string;
  descriptionEN?: string;
  endTime?: string;
  size?: number;
  startTime?: string;
  status?: string;
  techs?: string[];
  techsData?: Tag[];
  updatedAt?: string;
  userCreate?: User;
  workId?: string;
  workData?: Experience[];
}

export interface CreatePJInput {
  id: string;
  name: string;
  nameEN: string;
  size: number;
  techs: string[];
  description: string;
  descriptionEN: string;
  startTime: any;
  endTime: any;
  status: string;
  workId: string;
}

export type PJSlice = {
  dataPJs: Project[];
  total: number;
  isLoadingList: boolean;
  isLoadingForm: boolean;
  pjDetail?: Project;
  visibleFormPJ: boolean;
};

export interface SearchProjectInput {
  key: string;
  status: ProjectStatus[];
  limit: number;
  offset: number;
  sortBy?: number | string;
  orderBy?: string;
}

export interface SearchProjectOutput {
  dataProjects: Project[];
  total: number;
}

export interface UpdateProjectInput {
  data: CreatePJInput;
  projectId: string;
}

export const OPTION_FILTER_STATUS_PROJECT: OptionSelect[] = [
  {
    label: 'profile.active',
    value: ProjectStatus.ACTIVE,
  },
  {
    label: 'profile.inactive',
    value: ProjectStatus.INACTIVE,
  },
];

export interface FieldCreateProject {
  name: IField;
  nameEN: IField;
  size: IField;
  techs: IField;
  description: IField;
  descriptionEN: IField;
  startTime: IField;
  endTime: IField;
  status: IField;
  workId: IField;
}

export const fieldCreateProject: FieldCreateProject = {
  name: {
    name: 'name',
    label: 'profile.project_name_vn',
    placeholder: 'profile.project_name_vn',
  },
  nameEN: {
    name: 'nameEN',
    label: 'profile.project_name_en',
    placeholder: 'profile.project_name_en',
  },
  size: {
    name: 'size',
    label: 'profile.user_size',
    placeholder: 'profile.user_size',
  },
  techs: {
    name: 'techs',
    label: 'profile.technology',
    placeholder: 'profile.technology',
  },
  workId: {
    name: 'workId',
    label: 'profile.workId',
    placeholder: 'profile.workId',
  },
  description: {
    name: 'description',
    label: 'profile.description_vn',
    placeholder: 'profile.description_vn',
  },
  descriptionEN: {
    name: 'descriptionEN',
    label: 'profile.description_en',
    placeholder: 'profile.description_en',
  },
  startTime: {
    name: 'startTime',
    label: 'profile.start',
    placeholder: 'profile.start',
  },
  endTime: {
    name: 'endTime',
    label: 'profile.end',
    placeholder: 'profile.end',
  },
  status: {
    name: 'status',
    label: 'profile.status',
    options: OPTION_FILTER_STATUS_PROJECT,
  },
};
