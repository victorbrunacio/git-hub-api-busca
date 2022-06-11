import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
width: 80%;

input{
    width: 100%;
    padding: 1rem;
    border-radius: 4px;
    font-size: 1.3rem;
    border: 1px solid black;
    margin: 0 0.2rem;
    background-color: var(--branco);
}
button{
    border-radius: 4px;
    padding: 1.5rem;
    font-size: 1.3rem;
    cursor: pointer;
    background-color:var(--branco);
}
button:active{
    background-color: back;
    transition: 0.1s;
    color: aliceblue;
}
`