import Highlight, { defaultProps } from 'prism-react-renderer'
import vsDark from 'prism-react-renderer/themes/nightOwl';
const CodeSnippet =  ({ children }) => {
  // Pull the className
  const language = children.props.className?.replace("language-", "").trim();
  const code = children.props.children;
  return (
    <Highlight {...defaultProps}
      code={code}
      language={language}
      theme={vsDark}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div style={{width: "75vw"}}>
        <pre className={className} style={{ ...style, padding: "2rem", overflowX: "auto", borderRadius: "6px", 
        backgroundColor: "#112340", border: "1px solid #c9cdcd" }}>
          {tokens.slice(0, -1).map((line, index) => {
            const lineProps = getLineProps({ line, key: index })
            return (
              <div key={index} {...lineProps}>
                {line.map((token, key) => (
                  <span key={key}{...getTokenProps({ token, key })} />
                ))}
              </div>
            )
          }
          )}
        </pre>
        </div>
      )}
    </Highlight>
  )
}
export default CodeSnippet