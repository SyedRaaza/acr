import React , {useState , useEffect , Suspense} from 'react';
import FuseLoading from '@fuse/core/FuseLoading';
import axios from "axios";

function TestingComponent(props) {
    const [users , setUsers] = useState([])
    const getUsers = () => {
        axios.get("/users" , {baseURL:"https://jsonplaceholder.typicode.com"})
        .then(res => {
            setUsers(res.data)
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }
    useEffect(() => {
        getUsers()
    },[])
    return (
        <Suspense fallback={<h1>Loading profile...</h1>}>
            <div>
                {users.map((val , key) => (
                    <h1 key={key}>{val.name}</h1>
                ))}
                <button onClick={getUsers}>Get Users</button>
            </div>
        </Suspense>
    );
}

export default TestingComponent;