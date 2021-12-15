import User from '../user'

const UserList = (usersList) => {
    return (
        <div className="user-list"> 
        {usersList.map(user => <User user={user}/>)}
        </div>
    )
}

export default UserList;