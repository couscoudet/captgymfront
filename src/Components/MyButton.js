import React from 'react'
import Button from 'react-bootstrap/Button';

export default function MyButton({children, onClick}) {
  return (
    <Button variant="primary" className="m-2 px-4" onClick={onClick}>{children}</Button>
  )
}
