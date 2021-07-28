import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
// import './styles.css';

export const Code = ({ code, language }: { code: string; language: string }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, [code]);
  return (
    <div className="Code">
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};
