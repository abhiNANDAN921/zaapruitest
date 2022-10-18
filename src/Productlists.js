import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";


export default function Productlists() {
  const [isCopied, setIsCopied] = useState(false);

  const codeSnippet = `

  `;

  const onCopyText = () => {
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  return (
    <div className="container">
      <div className="code-snippet">
        <div className="code-section">
          <pre>{codeSnippet}</pre>
          <CopyToClipboard text={codeSnippet} onCopy={onCopyText}>
            <span>{isCopied ? "Copied!" : <button>copy</button>}</span>
          </CopyToClipboard>
        </div>
      </div>
    </div>
  );
}
