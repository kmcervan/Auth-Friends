import React from 'react';

function FriendCard({ details }) {
  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }

  return (
    <div className='friendCard container'>
      <h2>{details.name}</h2>
      <p>Email: {details.email}</p>
      <p>Age: {details.age}</p>

    </div>
  )
}

export default FriendCard;