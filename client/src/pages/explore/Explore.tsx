import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard";

const Explore = () => {
    const [users, setUsers] = useState<any[]>([]);

    const fetchUser = async () => {
        let res = await fetch("http://localhost:5000/api/users");
        if (res.ok) {
            let response = await res.json();
            setUsers(response);
            console.log(response);
        }
    };

    let text =
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores id delectus cumque eveniet non at doloribus cupiditate, nemo facere nulla, deleniti architecto deserunt illum eius sed. Libero voluptatem expedita cupiditate?";

    useEffect(() => {
        fetchUser();
    }, []);

    // #TODO COMPLETE THIS SHIT

    return (
        <React.Fragment>
            <main className="main-content p-2 w-full h-full overflow-y-auto">
                {/* <div className="flex flex-col overflow-auto h-full border-2 border-green-500">
                    Explorer
                </div> */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {users.map((user, index) => {
                        return (
                            <UserCard
                                key={index}
                                bio={text}
                                image={user.image}
                                username={user.name}
                                follow={index % 2 ? true : false}
                            />
                        );
                    })}
                </div>
            </main>
        </React.Fragment>
    );
};

export default Explore;
