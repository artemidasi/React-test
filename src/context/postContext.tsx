import React from 'react'
import { IPost, usePostData } from '../hooks/usePostData'

export const postContext = React.createContext<IPost[]>([])

export const PostContextProvider: React.FC = ({ children }) => {
  const [posts] = usePostData()

  return (
    <postContext.Provider value={posts}>
      {children}
    </postContext.Provider>
  )
}