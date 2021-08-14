import { gql } from '@apollo/client';
import { SearchTagInput } from '../models/TagModel';
import RequestService from '../services/requestService';

const requestService = new RequestService();

const getListTagQuery = gql`
  query ListTagQuery($input: SearchTagInput!) {
    listTags(input: $input) {
      dataTags {
        createBy
        createdAt
        description
        id
        slug
        tagType
        status
        title
        thumbnail
        updatedAt
        userCreate {
          avatar
          email
          id
          firstName
          lastName
        }
      }
      total
    }
  }
`;

export const getListTagRequest = (input: SearchTagInput): any => {
  return requestService.query(getListTagQuery, { input }, 'listTags');
};

// const addTagQuery = gql`
//   mutation createTagMutation($description: String!, $thumbnail: String!, $title: String!, $status: TagStatus!) {
//     createTag(input: { description: $description, thumbnail: $thumbnail, title: $title, status: $status }) {
//       createBy
//       createdAt
//       id
//       slug
//       status
//       title
//       updatedAt
//       description
//       tagType
//     }
//   }
// `;

// export const postLoginRequest = (variables: LoginInput): any => {
//   return requestService.mutation(
//     addTagQuery,
//     {
//       description: 'This iaaas tag test',
//       tagType: 1,
//       thumbnail: 'https://i.pinimg.com/736x/ec/14/7c/ec147c4c53abfe86df2bc7e70c0181ff.jpg',
//       title: 'Tag 1asdsadasd11 3132a asdsa 45678919012',
//       status: TagStatus.ACTIVE,
//     },
//     'login'
//   );
// };
