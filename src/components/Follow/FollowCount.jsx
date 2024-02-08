import { useState } from "react";
import FollowButton from "../FollowButton/FollowButton";

function ParentComponent (){
    const[followCount, setFollowCount] =useState(0)

    const handleFollowUpdate = (updatedFollowCount) =>{
        setFollowCount(updatedFollowCount)
    }

    return (<FollowButton
        userId={userId}
        onFollowUpdate={handleFollowUpdate}
        followCount={followCount}/>);
}