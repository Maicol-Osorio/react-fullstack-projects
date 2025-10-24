import type { ReactNode } from "react"


type MessageProps = {
  children: ReactNode
}
const Message = ({children}: MessageProps) => {
  return (
    <p className="text-center capitalize ring-1 ring-red-500 bg-red-600/80 p-2 font-semibold text-white rounded-lg">
      {children}
    </p>
  )
}

export default Message
