import React, { useState, useEffect } from 'react'
import followCount from '../FollowButton/FollowCount.jsx'
import { addFollower, removeFollower } from '../../api/user.js'
import { useProfile } from '../../context/ProfileContext.jsx'

function FollowButton({ userId, onFollowUpdate, FollowCount }) {
  const { profile } = useProfile()
  const [isFollowing, setIsFollowing] = useState(profile.following.includes(userId))
  const [followCount,setFollowCount] = useState(profile.following.length)
  
  useEffect (() =>{
  setFollowCount(profile.following.length)
  }, [profile.following])
  
  
  const handleFollowClick = async () => {
    try {
      const response = await addFollower(userId)
      console.log(response)

      setIsFollowing(true)
      onFollowUpdate(FollowCount + 1)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleUnfollowClick = async () => {
    try {
      const response = await removeFollower(userId)

      setIsFollowing(false)
      onFollowUpdate(FollowCount - 1)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <>
      <button onClick={isFollowing ? handleUnfollowClick : handleFollowClick}>
        {isFollowing ? 'Unfollow' : 'Follow'}
      </button>
      <span>
        <FollowCount count={followCount(profile, userId)} />
      </span>
    </>
  )
}

export default FollowButton
