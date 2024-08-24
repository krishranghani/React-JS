import { useState, useEffect } from "react";
import { Navbar } from "../Components/Navbar";
import Footer from "../Components/fotter";

export default function UserTable2() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const editUser = (id) => {
    const updatedEmail = prompt("Enter new email:");
    if (updatedEmail) {
      setUsers(
        users.map((user) =>
          user.id === id ? { ...user, email: updatedEmail } : user
        )
      );
    }
  };

  const createNewUse = () => {
    const newUser = {
      id: users.length + 1,
      firstName: prompt("Enter first name:"),
      lastName: prompt("Enter last name:"),
      email: prompt("Enter Email:"),
      age: prompt("Enter Your Age:"),
      location: prompt("Enter Your Location:"),
      Image: `https://i.pravatar.cc/150?u=${users.length + 1}`,
    };
    setUsers([...users, newUser]);
  };

  // Calculate the current users to display based on the current page
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Handle next page
  const handleNextPage = () => {
    if (currentPage < Math.ceil(users.length / usersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle previous page
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="p-4">
        <Navbar />
        {/* <h1 className="text-3xl font-bold mb-4 text-center">Users</h1> */}
        <hr />
        <br />
        <button onClick={createNewUse} className="bg-gray-300 p-2 rounded mb-4">
          Create
        </button>
        <table className="min-w-full bg-white border border-gray-400">
          <thead>
            <tr className="bg-blue-600 text-white font-mono py-2">
              <th className="py-2">Id</th>
              <th className="py-2">Image</th>
              <th className="py-2">FirstName</th>
              <th className="py-2">LastName</th>
              <th className="py-2">Email</th>
              <th className="py-2">Age</th>
              <th className="py-2">Location</th>
              <th className="py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentUsers.map((user) => (
              <tr key={user.id} className="border-t border-gray-300">
                <td className="py-2 text-center">{user.id}</td>
                <td className="py-2 text-center">
                  <img
                    src={user.Image}
                    className="rounded-full w-10 h-10 ml-8"
                  />
                </td>
                <td className="py-2 text-center">{user.firstName}</td>
                <td className="py-2 text-center">{user.lastName}</td>
                <td className="py-2 text-center text-indigo-700">
                  {user.email}
                </td>
                <td className="py-2 text-center">{user.age}</td>
                <td className="py-2 text-center">{user.location}</td>
                <td className="py-2 text-center">
                  <button
                    onClick={() => editUser(user.id)}
                    className="bg-gray-300 mr-3 duration-1000 button w-14 hover:rounded-xl hover:bg-orange-500 rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="bg-[rgb(250,164,52)] hover:bg-[#ff0000] duration-1000 text-black hover:text-white button w-16 hover:rounded-xl rounded-md "
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="bg-gray-300 p-2 rounded"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage >= Math.ceil(users.length / usersPerPage)}
            className="bg-gray-300 p-2 rounded"
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
