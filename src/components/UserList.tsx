import { IUser } from "extension-communication";
import { UserInfo } from "./UserInfo";
import styles from "../styles/styles.module.css"
import styled from "styled-components";
import { useEffect, useState } from "react";

const List = styled.div`
display: flex;
justify-content: justify-center;
`
const filterUsers = (search: string, data: IUser[] | null) =>
 data ? data.filter((user) => user.name.toLowerCase().includes(search.toLowerCase())) : [];

const UserList = ({ userData }: any) => {
console.count("USER_LIST")
  const [search, setSearch] = useState('')
  const [filteredData, setFilteredData] = useState<IUser[]>([])
const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  setSearch(e.target.value)
}

useEffect(() => {
const filteredUsers = search ? filterUsers(search, userData) : userData
setFilteredData(filteredUsers)
},[search])

  return (
    <>
    {/* <List> */}
      <h2>User List</h2>
      <input type="text" placeholder="search user" onChange={onSearch}/>
      {/* </List> */}

        {filteredData && (
          <ul className={styles.list}>
            {filteredData.map((user: IUser) => (
              <li key={user.id} className={styles.user}>
                <UserInfo user={user} />
              </li>
            ))}
          </ul>
        )}
    </>
  );
};
export default UserList;
