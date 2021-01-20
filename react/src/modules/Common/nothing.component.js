import React from 'react'
import './nothing.styles.scss'

export const Nothing = ({ children = 'There is nothing!' }) => <h2 className='nothing' children={children} />