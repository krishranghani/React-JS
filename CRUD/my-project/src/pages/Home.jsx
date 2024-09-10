import React, { useState, useEffect } from 'react';
import { GrFormView } from "react-icons/gr";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState(""); // New state for search term
  const [showTooltip, setShowTooltip] = useState({});

  const loadStudent = async () => {
    const res = await axios.get('http://localhost:3000/student');
    setData(res.data);
    if (res.data.length === 0) {
      localStorage.removeItem('lastStudentId');
    }
  };

  useEffect(() => {
    loadStudent();
  }, []);

  const DeleteStudent = (id) => {
    axios.delete(`http://localhost:3000/student/${id}`)
      .then(() => {
        loadStudent();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleMouseEnter = (id, action) => {
    setShowTooltip(prevState => ({
      ...prevState,
      [id]: action
    }));
  };

  const handleMouseLeave = (id) => {
    setShowTooltip(prevState => ({
      ...prevState,
      [id]: null
    }));
  };

  const startIndex = (page - 1) * rowsPerPage;

  // Filter data based on search term
  const filteredData = data.filter(item =>
    item.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentData = filteredData.slice(startIndex, startIndex + rowsPerPage);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-4 flex items-center">
        <input
          type="text"
          placeholder="Search by name or email"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm w-60 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={() => setPage(1)}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600"
        >
          Search
        </button>
      </div>

      <table className="min-w-full divide-y divide-gray-200 bg-white shadow rounded-lg">
        <thead className="bg-black text-white">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Id</th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Image</th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">First Name</th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Last Name</th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Age</th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Phone Number</th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Location</th>
            <th className="px-4 py-3 text-left text-xs font-medium uppercase tracking-wider">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {currentData.length > 0 ? (
            currentData.map(item => (
              <tr key={item.id}>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.id}</td>
                <td className="px-4 py-4 whitespace-nowrap">
                  <img src={item.image} alt="Avatar" className="w-12 h-12 rounded-full border-2 border-gray-200" />
                </td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.firstname}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.lastname}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.email}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.age}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.phone}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.location}</td>
                <td className="px-4 py-4 whitespace-nowrap text-sm font-medium flex justify-start items-center">
                  <div
                    className="relative inline-block mt-4"
                    onMouseEnter={() => handleMouseEnter(item.id, 'view')}
                    onMouseLeave={() => handleMouseLeave(item.id)}
                  >
                    <button className="text-blue-500 hover:text-blue-700 text-2xl">
                      <GrFormView />
                    </button>
                    {showTooltip[item.id] === 'view' && (
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded p-2">
                        View Profile
                      </div>
                    )}
                  </div>

                  <Link to={`/edit/${item.id}`}>
                    <div
                      className="relative inline-block mt-4"
                      onMouseEnter={() => handleMouseEnter(item.id, 'edit')}
                      onMouseLeave={() => handleMouseLeave(item.id)}
                    >
                      <button className="text-yellow-500 hover:text-yellow-700 text-xl mx-2">
                        <FaRegEdit />
                      </button>
                      {showTooltip[item.id] === 'edit' && (
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded p-2">
                          Edit
                        </div>
                      )}
                    </div>
                  </Link>

                  <div
                    className="relative inline-block mt-4"
                    onMouseEnter={() => handleMouseEnter(item.id, 'delete')}
                    onMouseLeave={() => handleMouseLeave(item.id)}
                  >
                    <button className="text-red-500 hover:text-red-700 text-xl" onClick={() => DeleteStudent(item.id)}>
                      <MdDeleteOutline />
                    </button>
                    {showTooltip[item.id] === 'delete' && (
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded p-2">
                        Delete
                      </div>
                    )}
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="px-4 py-4 text-center text-gray-500">No results found</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-gray-600">
          Page {page} of {totalPages}
        </span>
        <div className="flex space-x-2">
          <button
            onClick={() => setPage(prev => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
            disabled={page === totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
