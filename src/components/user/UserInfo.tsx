import styles from "../styles/styles.module.css"
import styled from "styled-components";

const Card = styled.div`
// border: solid 0.5px black;
background: beige;
margin: 8px;
padding: 8px;
border-radius: 5px;
`
export const UserInfo = ({user}:any) => {
return (
    <>
    <Card>
   <p>Name: {user.name}</p>
   <p>Age: {user.age} </p> 
    Hobbies: <ul >{user.hobbies.map((hobby: string) => <li>{hobby}</li>)}</ul>
    </Card>
 


    </>
)
}