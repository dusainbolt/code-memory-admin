import React from 'react';
import Box from '../../common/Box';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { DraftEditor } from '../../components/Blog/DraftEditor';
import { Code } from '../../components/Blog/Code';
import { CodeEditor } from '../../components/Blog/CodeEditor';

const code = `const App = props => {
  return (
    <div>
      <h1> React App </h1>
      <div>Awesome code</div>
    </div>
  );
};
`;

export const AddBlogPage = () => {
  return (
    <Box className="admin__content">
      <DraftEditor />
      <CodeEditor className="mt-26" />
    </Box>
  );
};
