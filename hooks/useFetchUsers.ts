"use client";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { baseBackendUrl } from "@/app/const";
// import { useLoginContext } from "@/contexts/LoginContext";

const useFetchUsers = () => {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  /* useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);*/

  return { users: "hellow", loading: false, error: "" };
};

export default useFetchUsers;
