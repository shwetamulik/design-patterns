import { IUser } from "extension-communication";
import { UserInfo } from "./UserInfo";
import styles from "../../styles/styles.module.css"

import styled from "styled-components";
import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const List = styled.div`
display: flex;
justify-content: justify-center;
`
const filterUsers = (search: string, data: IUser[] | null) =>
 data ? data.filter((user) => user.name.toLowerCase().includes(search.toLowerCase())) : [];

const UserList = ({ userData }: any) => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('')
  const [searchParams, setSearchParams] = useSearchParams({})

  const isActiveUser = searchParams.get('filter') === 'active';
  const [filteredData, setFilteredData] = useState<IUser[]| null>(null)
const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  setSearch(e.target.value)
}

useEffect(() => {
  console.log('search', {search, userData})
const filteredUsers = search ? filterUsers(search, userData) : userData
setFilteredData(filteredUsers)
},[search,userData])

  return (
    <>
    {/* <List> */}
      <h2>User List</h2>
      <input type="text" placeholder="search user" onChange={onSearch}/>
      {/* </List> */}

        {filteredData && (
          <ul className={styles.list}>
            {filteredData.map((user: IUser) => (
              <li key={user.id} className={styles.user} onClick={() => navigate(`/user/${user.id}`)}>
                <UserInfo user={user}  />
              </li>
            ))}
          </ul>
        )}
        <button onClick={() => setSearchParams({filter: 'active'})}>Active Users</button>
        <button onClick={()=> setSearchParams({})}>Reset</button>
         {
          isActiveUser ? <h3>Active Users</h3> : <h3>All Users</h3>
         }
    </>
  );
};
export default UserList;
