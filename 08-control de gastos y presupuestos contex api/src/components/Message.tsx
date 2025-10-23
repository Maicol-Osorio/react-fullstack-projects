import type { ReactNode } from "react"

type MessageProps = {
    Children: ReactNode
}

const Message = ({Children}: MessageProps) => {
  return (
    <div>
      {Children}
    </div>
  )
}

export default Message
