---
name: 'component'
root: 'src/components'
output: '**/*'
ignore: []
questions:
  value: 'Please enter component name.'
---

# `{{ inputs.value | camel }}/index.tsx`

```typescript
export * from "./{{ inputs.value | camel }}"
```

# `{{ inputs.value | camel }}/{{ inputs.value | camel }}.tsx`

```typescript
import React from "react"

export type Props = {
}

export const {{ inputs.value | pascal }}: React.FC<Props> = () => {
  return (

  )
}
```
