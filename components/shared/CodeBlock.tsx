'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = 'javascript' }: CodeBlockProps) {
  // Auto-detect language if not provided
  const detectedLanguage = language || detectLanguage(code);
  
  return (
    <div className="overflow-x-auto">
      <SyntaxHighlighter
        language={detectedLanguage}
        style={vscDarkPlus}
        customStyle={{
          margin: 0,
          padding: '1rem',
          borderRadius: '0.5rem',
          fontSize: '0.75rem',
          lineHeight: '1.5',
          background: '#0a0a0a',
        }}
        codeTagProps={{
          style: {
            fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',
          },
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

function detectLanguage(code: string): string {
  // Detect language based on code patterns
  if (code.includes('::') || code.includes('%errorLevel%') || code.includes('@echo')) {
    return 'batch';
  }
  if (code.includes('function') && code.includes('param') && code.includes('$')) {
    return 'powershell';
  }
  if (code.includes('async function') || code.includes('const express') || code.includes('app.post')) {
    return 'javascript';
  }
  if (code.includes('function') && code.includes('=>')) {
    return 'javascript';
  }
  if (code.includes('<?php') || code.includes('<?=')) {
    return 'php';
  }
  if (code.includes('def ') || code.includes('import ')) {
    return 'python';
  }
  return 'javascript';
}

