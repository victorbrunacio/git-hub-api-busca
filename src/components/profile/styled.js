import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
align-items: flex-start;

`
export const WrapperInfoUser = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
height: auto;
margin-left: 3rem;
h1{
    font-size: 2.2rem;
    font-weight: bold;
}
h3{
    font-size: 1.5rem;
}
h4{
    font-size: 1.2rem;
}
`
export const WrapperStatusCount = styled.div`
display: flex;
align-items: center;
align-items: flex-center;
div {
    margin: 3rem;
    text-align: center;
}
`
export const WrapperUserGeneric = styled.div`
display: flex;
align-items: center;
margin-top: 1.8rem;
h3{
    margin-right: 2.5rem;
}
a{
    font-size: 1.5rem;
    color: blue;
    font-weight: bold;
    text-decoration: none;
}
`
export const WrapperImage = styled.img`
border-radius: 50%;
width: 13vw;
min-width: 5vw;
margin: 2rem;
`