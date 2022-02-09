import React from 'react';
import styles from './userblock.css';
import { IconAnon } from "../../../icons";
import { MAIN_URL_REDDIT, fetchURL} from '../../../../const/const';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
}

const authParams = {
  client_id: "m6TU7zJNvRWKPQMR2a7wgg",
  response_type: "code",
  state: "random_string",
  redirect_uri: "http://localhost:3000/auth",
  duration: "permanent",
  scope: "read submit identity"
}

export const UserBlock: React.FC<IUserBlockProps> = ({ avatarSrc, username }) => {
  return (
    <a
      href={`${fetchURL.authorize}?client_id=${process.env.CLIENT_ID}&response_type=${authParams.response_type}&state=${authParams.state}&redirect_uri=${authParams.redirect_uri}&duration=${authParams.duration}&scope=${authParams.scope}`}
      className={styles["User-link"]}
    >
      <div>
        {
          avatarSrc ? <img src={avatarSrc} alt="user avatar" /> : <IconAnon />
        }
      </div>
      <div>
        {username ? username : "Аноним"}
      </div>
    </a>
  );
}
