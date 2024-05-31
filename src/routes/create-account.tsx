import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import {
  Form,
  Input, 
  Logo, 
  Title, 
  FormWrapper, 
  Error, 
  Switcher,
  Wrapper
} from "../components/auth-components"

export default function CreateAccount() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { target: {name, value} } = e;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  }
  const onSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLoading || name === "" || email === "" || password === "") return;
    try {
      setLoading(true);
      const credentials = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(credentials.user, {
        displayName: name,
      })
      navigate("/");
    } catch (e) {
      setError("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Wrapper>
      <FormWrapper>
        <Logo src="/logo.png" /><br />
        <Title>Join</Title>
        <Form onSubmit={onSubmit}>
          <Input onChange={onChange} name="name" value={name} placeholder="Name" type="text" required />
          <Input onChange={onChange} name="email" value={email} placeholder="Email" type="email" required />
          <Input onChange={onChange} name="password" value={password} placeholder="Password" type="password" required />
          <Input onChange={onChange} type="submit" value={isLoading ? "Loading..." : "Create Account"} />
        </Form>
        {error !== "" ? <Error>{error}</Error> : null}
        <Switcher>
          Already have an account?{" "}
          <Link to="/Login">Login &rarr;</Link>
        </Switcher>
      </FormWrapper>
    </Wrapper>
  );
}