import Highlight, { defaultProps } from 'prism-react-renderer'
import vsDark from 'prism-react-renderer/themes/nightOwlLight';
import styles from "./codesnippet.module.css"
export default ({ children }) => {
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
        <pre className={className} style={{ ...style, padding: "3.2rem", overflowX: "auto", borderRadius: "6px", 
        background: "transparent", border: "1px solid #c9cdcd" }}>
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
{/* <Highlight {...defaultProps} code={code} theme={vsDark} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style }}>
          {tokens.slice(0, -1).map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight> */}