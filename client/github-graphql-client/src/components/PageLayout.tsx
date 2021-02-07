import React, { FC } from 'react'
import { css } from '@emotion/react'

interface Props {
    children?: React.ReactNode
}

const PageLayout: FC<Props> = ({ children }) => (
    <div css={style}>{children}</div>
)

const style = css`
    max-width: 720px;
    margin-left: auto;
    margin-right: auto;
`

export default PageLayout
