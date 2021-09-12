import { gql } from '@apollo/client';
import { CreateExpInput, SearchExpInput, UpdateExpInput } from '../models/ExperienceModel';
import { CreatePJInput, SearchProjectInput } from '../models/ProjectModel';
import { UpdateTagInput } from '../models/TagModel';
import RequestService from '../services/requestService';
import { ExpResolver, RESPONSE_EXP } from './resolver/expResolver';
import { PJResolver, RESPONSE_PJ } from './resolver/ProjectResolver';
import { TagResolver, RESPONSE_TAG } from './resolver/tagResolver';
import { UserResolver } from './resolver/userResolver';

const requestService = new RequestService();

const addPJQuery = gql`
  mutation createProjectMutation($input: CreateProjectInput!) {
    ${RESPONSE_PJ.projectCreate}(input: $input) {
      ${PJResolver}
      ${RESPONSE_EXP.userCreate} {
        ${UserResolver}
      }
    }
  }
`;

const getListPJQuery = gql`
  query ListProjectQuery($input: SearchProjectInput!) {
    ${RESPONSE_PJ.projectList}(input: $input) {
      dataProjects {
        ${PJResolver}
        ${RESPONSE_PJ.userCreate} {
          ${UserResolver}
        }
        ${RESPONSE_PJ.techsData} {
          ${TagResolver}
        }

      }
      total
    }
  }
`;

const updateTagQuery = gql`
  mutation UpdateExpMutation($input: UpdateWorkInput!) {
    ${RESPONSE_EXP.workUpdate}(input: $input) {
      ${ExpResolver}
      ${RESPONSE_EXP.userCreate} {
        ${UserResolver}
      }
    }
  }
`;

export const getListPJRequest = (input: SearchProjectInput): any => {
  return requestService.query(getListPJQuery, { input }, RESPONSE_PJ.projectList);
};

export const submitPJRequest = (input: CreatePJInput): any => {
  const id = input.id;
  delete input.id;
  if (!!id) {
    // const dataQueryUpdate: UpdateExpInput = { data: input, workId: id };
    // return requestService.mutation(updateTagQuery, { input: dataQueryUpdate }, RESPONSE_EXP.workUpdate);
  } else {
    return requestService.mutation(addPJQuery, { input }, RESPONSE_PJ.projectCreate);
  }
};
