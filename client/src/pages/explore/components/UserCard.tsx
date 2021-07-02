import React from "react";

interface UserData {
    image: string;
    username: string;
    follow: boolean;
    bio: string;
}

const UserCard: React.FC<UserData> = ({ image, username, follow, bio }) => {
    console.log(bio.length);

    return (
        <div className="bg-gray-100 w-72 h-48 rounded-md p-3">
            <div className="flex items-center justify-between mb-2">
                <div className="flex flex-col items-center h-24">
                    <img
                        src={image}
                        alt={username}
                        className="rounded-full w-16 h-16"
                    />
                    <p className="username">{username}</p>
                </div>
                <button className="follow w-28 h-10 rounded-full bg-red-200">
                    {follow ? "Following" : "Follow"}
                </button>
            </div>
            <p className="bio h-16">
                {bio.length < 82 ? bio : `${bio.substring(0, 82)}...`}
                {/* {bio.substring(0, 82)} */}
            </p>
        </div>
    );
};

export default UserCard;
