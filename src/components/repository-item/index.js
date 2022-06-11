import React from 'react'
import * as S from './styled'

function RepositoryItem({name, linkToRepo, fullName}) {
    return (
        <S.Wrapper>
            <h2>{name}</h2>
            <h3>Link Repo:</h3>
            <a href={linkToRepo} target="_blank" rel="noreferrer">{fullName}</a>
        </S.Wrapper>
    )
}

export default RepositoryItem
