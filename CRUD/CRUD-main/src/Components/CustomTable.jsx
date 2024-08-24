import React, { useState } from "react";

const usersJsonData = [
  {
    id: 1,
    firstName: "Karn",
    lastName: "Yong",
    email: "karn.yong@mecallapi.com",
    Image: "https://i.pravatar.cc/150?u=1",
    age: 25,
    location: "America"

  },
  {
    id: 2,
    firstName: "Ivy",
    lastName: "Cal",
    email: "ivy.cal@mecallapi.com",
    Image: "https://i.pravatar.cc/150?u=2",
    age: 25,
    location: "America"
  },
  {
    id: 3,
    firstName: "Walter",
    lastName: "Beau",
    email: "walter.beau@mecallapi.com",
    Image: "https://i.pravatar.cc/150?u=3",
    age: 25,
    location: "America"
  },
  {
    id: 4,
    firstName: "Gayla",
    lastName: "Bertrand",
    email: "gayla.bertrand@mecallapi.com",
    Image: "https://i.pravatar.cc/150?u=4",
    age: 25,
    location: "America"
  },
  {
    id: 5,
    firstName: "Benjamin",
    lastName: "Chaz",
    email: "benjamin.chaz@mecallapi.com",
    Image: "https://i.pravatar.cc/150?u=5",
    age: 25,
    location: "America"
  },
];

export default function UserTable() {
  const [users, setUsers] = useState(usersJsonData);

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
      age: prompt("Enter The Your Age:"),
      location: prompt("Enter The Your Location:"),
      Image: `https://i.pravatar.cc/150?u=${users.length + 1}`,
    };
    setUsers([...users, newUser]);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Users</h1>
      <hr /><br />
      <button
        onClick={createNewUse}
        className="bg-gray-300 p-2 rounded mb-4"
      >
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
          {users.map((user) => (
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
              <td className="py-2 text-center text-indigo-700">{user.email}</td>
              <td className="py-2 text-center">{user.age}</td>
              <td className="py-2 text-center">{user.location}</td>
              <td className="py-2 text-center">
                <button
                  onClick={() => editUser(user.id)}
                  className="bg-gray-300 mr-3 button"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="bg-[rgb(250,164,52)] hover:bg-[#ff0000] duration-1000 text-black hover:text-white button"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
