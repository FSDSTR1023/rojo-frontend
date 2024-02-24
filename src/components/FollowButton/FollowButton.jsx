import React, { useState, useEffect } from 'react'
import styles from './FollowButton.module.css'
import { addFollower, removeFollower } from '../../api/user.js'
import { useProfile } from '../../context/ProfileContext.jsx'

function FollowButton({ userId }) {
  const { profile } = useProfile()
  const [isFollowing, setIsFollowing] = useState(false)
  const [followCount, setFollowCount] = useState(0)

  useEffect(() => {
    setFollowCount(profile?.following.length)
    setIsFollowing(profile?.following.includes(userId))
  }, [profile?.following])

  const handleFollowClick = async () => {
    try {
      await addFollower(userId)
      setIsFollowing(true)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  const handleUnfollowClick = async () => {
    try {
      removeFollower(userId)
      setIsFollowing(false)
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <>
      <button
        onClick={isFollowing ? handleUnfollowClick : handleFollowClick}
        className={styles.followButton}
        data-state={isFollowing}
      >
        {isFollowing ? 'Unfollow' : 'Follow'}
      </button>
    </>
  )
}

export default FollowButton
