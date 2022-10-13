type ProfileProps = {
    name: string,
}

const Profile = ({ name }: ProfileProps) => {
    return (
        <div>
            <h2>Hi {name}, this is your private component.</h2>
        </div>
    );
}

export default Profile;