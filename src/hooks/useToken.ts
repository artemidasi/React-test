import React from "react";

export const useToken = () => {
  const [token, setToken] = React.useState<string>('')

  React.useEffect(() => {
    if (window.__token__) setToken(window.__token__)
  }, [])

  return [token]
}