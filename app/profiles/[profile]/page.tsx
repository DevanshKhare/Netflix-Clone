import React from 'react'

const page = ({params}: {params: {profile: string}}) => {
  return (
    <div>{params.profile}</div>
  )
}

export default page