import React from 'react'
import CodeSnippet from '../components/StaticCodeSnippet/CodeSnippet'
const example = `import React from 'react'
import CodeSnippet from '../components/StaticCodeSnippet/CodeSnippet'

export default function Code() {
  return (
    <CodeSnippet>
        
    </CodeSnippet>
  )
}`
export default function Code() {
  return (
    <CodeSnippet className="javascript">
        {example}
    </CodeSnippet>
  )
}
