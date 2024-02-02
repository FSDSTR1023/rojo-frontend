import React, { useState } from "react";

function FollowButton(props) {
  const [isFollowing, setIsFollowing] = useState(false);
  const userId = props.userId;
  function handleFollowClick() {
    
    fetch("/rojo-frontend/src/api/user.js/{$userId}", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userId: props.userId })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setIsFollowing(true);
        } else {
          alert("Failed to follow user.");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Failed to follow user.");
      });
  }
}

function FollowButton(props) {
  const [isFollowing, setIsFollowing] = useState(false);
  const userId = props.userId;

  function handleUnfollowClick() {
    
    fetch("/rojo-frontend/src/api/user.js/{$userId}", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ userId: props.userId })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setIsFollowing(false);
        } else {
          alert("Failed to unfollow user.");
        }
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Failed to unfollow user.");
      });
  }

  return (
    <>
      <button onClick={isFollowing ? handleUnfollowClick : handleFollowClick}>
        {isFollowing ? "Unfollow" : "Follow"}
      </button>
    </>
  );
}

export default FollowButton;