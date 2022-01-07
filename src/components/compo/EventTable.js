import React from 'react'
import { Link } from "react-router-dom";
import './EventTable.css'


function EventTable() {

    // const [users, setUser] = useState([]);

    // useEffect(() => {
    //   loadUsers();
    // }, []);
  
    // const loadUsers = async () => {
    //   const result = await axios.get("http://localhost:3003/users");
    //   setUser(result.data.reverse());
    // };
  
    // const deleteUser = async id => {
    //   await axios.delete(`http://localhost:3003/users/${id}`);
    //   loadUsers();
    // };







    return (
        <div className="container">
        <div className="py-4">
         
          <table class="table border shadow">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Nom D'evenemtn</th>
                <th scope="col">Date</th>
                <th scope="col">Speaker</th>
                <th scope="col">category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* {users.map((user, index) => ( */}
                <tr>
                  <td>Nom devent</td>
                  <td>18 juillet 2022</td>
                  <td>Event</td>
                  <td>Hello Mouad</td>
                  <td>
                    {/* <Link class="btn btn-primary mr-2" to={`/users/${user.id}`}> */}
                      
                    {/* </Link> */}
                    <Link
                      class="btn btn-outline-primary mr-2"
                    //   to={`/users/edit/${user.id}`}
                    >
                      Edit
                    </Link>
                    <Link
                      class="btn btn-danger"
                    //   onClick={() => deleteUser(user.id)}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              {/* ))} */}
            </tbody>
          </table>
        </div>
      </div>
    )
}

export default EventTable
