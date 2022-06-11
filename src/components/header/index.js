import React, { useState } from 'react'
import * as S from './styled'
import useGithub from '../../hooks/github-hooks'
function Header() {

  const {getUser} = useGithub()
  const [usernameForSearch, setUserNameForSearch] = useState()

  const submitGetUser = () =>{
    if(!usernameForSearch)return 
    return getUser(usernameForSearch)
  }

  return (
    <header>
    <S.Wrapper>
        <input type="text" placeholder='Digite o User para ser Pesquisado...' onChange={(event)=>setUserNameForSearch(event.target.value)}/>
        <button type='submit' onClick={submitGetUser}>Buscar</button>
    </S.Wrapper>
  </header>
  )
}

export default Header
