import React, { useContext } from 'react'
import axios from 'axios';
import { tokenContext } from '../context/tokenContext';
import { AUTH_URL_REDDIT } from '../const/const';

interface IUserData {
  name?: string;
  iconImg?: string;
}

export const useUserData = () => {
  const [data, setData] = React.useState<IUserData>({})

  const token = useContext(tokenContext)

  React.useEffect(() => {
    axios.get(AUTH_URL_REDDIT, {
      headers: {
        'Authorization': `bearer ${token}`
      }
    })
      .then(res => {
        const useData = res.data
        setData({
          name: useData.name,
          iconImg: useData.icon_img
        })
      })
      .catch(console.log)
  }, [token])

  return [data]
}