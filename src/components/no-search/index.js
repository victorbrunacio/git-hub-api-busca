import React from 'react'
import * as S from './styled'
import git from "./img/git.png"

function NoSearch() {
  return (
    <S.Wrapper>
        <p>  Procure por um usuário no github !</p>
        <img src={git} alt="" />
    </S.Wrapper>
  )
}

export default NoSearch
