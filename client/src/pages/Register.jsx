import React from 'react';
import { useState } from "react";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import { useNavigate } from "react-router-dom";

const REGISTER_MUTATION = gql`
  mutation Register($username: String!, $email: String!, $password: String!) {
    register(username: $username, email: $email, password: $password) {
      success
      error
    }
  }
`;

export const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register, { data, error, loading }] = useMutation(REGISTER_MUTATION);
  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
    const { data } = await register({ variables: { username, email, password } });
    if (data.register.success) {
        navigate('/home');
    } else {
      // show error message
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder="Username"
      />
      <input
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Password"
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Register;
