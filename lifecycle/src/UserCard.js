import React from 'react'
import './UserCard.css'

class UserCard extends React.Component {

    render(props) {
        console.log(this.props.userData)
        return(
            <div>
                <h2>UserCard</h2>
                <p>Login: {this.props.userData.login}</p>
                <p>Location: {this.props.userData.location}</p>
                <p>Followers: {this.props.userData.followers}</p>
                <p>Following: {this.props.userData.following}</p>
                <p>Followers include: </p>
                {this.props.userFollowers.map(follower => {
                   return <p>{follower.login}</p>
                })}
            </div>
        )
    }
}

export default UserCard