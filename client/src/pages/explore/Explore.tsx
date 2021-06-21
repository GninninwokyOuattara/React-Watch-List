import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard";

const Explore = () => {
    const [users, setUsers] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    let content: JSX.Element;

    let text =
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores id delectus cumque eveniet non at doloribus cupiditate, nemo facere nulla, deleniti architecto deserunt illum eius sed. Libero voluptatem expedita cupiditate?";

    if (isLoading) {
        content = (
            <div className="w-full h-full flex items-center justify-center">
                <i className="fad fa-spinner-third fa-10x animate-spin"></i>
            </div>
        );
    } else {
        content = (
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
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
        );
    }

    const fetchUser = async () => {
        setIsLoading(true);
        let res = await fetch("http://localhost:5000/api/users");
        if (res.ok) {
            let response = await res.json();
            setUsers(response);
            console.log(response);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        fetchUser();
    }, []);

    return (
        <React.Fragment>
            <main className="main-content p-2 w-full h-full overflow-y-auto">
                {content}
            </main>
        </React.Fragment>
    );
};

export default Explore;
