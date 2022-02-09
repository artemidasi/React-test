import React from "react";
import axios from 'axios';
import { fetchURL } from "../const/const";
import { tokenContext } from "../context/tokenContext";

export interface IPostImage {
  source: {
    url: string
  }
}

export interface ICard {
  postInfo: IPostData
}

export interface IPostData {
  // Автор поста
  author: string,
  // Когда был создан пост
  created: number,
  // Заголовок
  title: string
  preview: {
    enabled: boolean
    images: IPostImage[]
  }
}

export interface IPost {
  data: IPostData,
  kind: string
}

export const usePostData = () => {
  const [posts, setPosts] = React.useState<IPost[]>([])

  const token = React.useContext(tokenContext)

  const config = React.useMemo(() => ({
    headers: {
      'Authorization': `bearer ${token}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
  }), [token])

  React.useEffect(() => {
    axios.get(fetchURL.best, config)
      .then(response => {
        setPosts(response.data.data.children)
      })
      .catch(console.log)
  }, [config])

  return [posts]
}