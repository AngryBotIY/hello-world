import React from 'react'
import './button.styles.scss'

const types = ['button-primary', 'button-secondary', 'button-default']

export const Button = ({ type, ...props }) => <button className={types.find((t, i) => t.includes(type) && types[i])} {...props} />
