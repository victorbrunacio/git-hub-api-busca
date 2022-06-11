import styled from "styled-components";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

export const WrapperTab = styled(Tab)`
border-radius: 2rem;
border: 1px solid grey;
padding: 1rem;
user-select: none;
cursor: pointer;
margin: 0.5rem;
&:focus{
    background-color:#1f2421;
    color: white;
    transition: 0.4s;
}
`

export const WrapperTabs = styled(Tabs)`
font-size: 1.5rem;
width: 100%;
`


export const WrapperTabList = styled(TabList)`
padding: 0.5rem;
display: flex;
align-items: flex-start;
margin: 0;
`

export const WrapperTabPanel = styled(TabPanel)`

visibility: hidden;
&.is-selected{
visibility: visible;
}
`
export const WrapperList = styled.div`
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
`