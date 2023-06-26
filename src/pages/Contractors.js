import React, { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../styles/Contractors.module.css";
import { AddNewButton, Modal, Table, TextInput } from "../components";

const Contractors = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setconfirmPassword] = useState("")

  return (
    <div className={styles.contractorsContainer}>
      <Modal modalTitle="Add New Employee">
        <TextInput
          label="First Name "
          star="*"
          placeholder="First Name"
          type="text"
          value={firstName}
          setValue={setFirstName}
        />
        <TextInput
          label="Last Name"
          star="*"
          placeholder="Last Name"
          type="text"
          value={lastName}
          setValue={setLastName}
        />
        <TextInput
          label="Email Address"
          star="*"
          placeholder="Email Address"
          type="email"
          value={email}
          setValue={setEmail}
        />
        <TextInput
          label="Password"
          star="*"
          placeholder="Password"
          type="password"
          value={password}
          setValue={setPassword}
        />
        <TextInput
          label="Confirm Password"
          star="*"
          placeholder="Confirm Password"
          type="password"
          value={confirmPassword}
          setValue={setconfirmPassword}
        />
      </Modal>
      <AddNewButton
        title="Add New Contractor"
        onClick={() => document.getElementById("modalId").click()}
      />
      <Table
        headings={["Name", "Email", "Date Updated", "Profile", "Actions"]}
        data={[
          {
            name: "John Doe",
            email: "johndoe247340@gmail.com",
            date: "May 3, 2023",
            profile: (
              <Link className={styles.viewProfile} to="/earnings">
                View Profile
              </Link>
            ),
          },
          {
            name: "John Doe",
            email: "johndoe247340@gmail.com",
            date: "May 3, 2023",
            profile: (
              <Link className={styles.viewProfile} to="/earnings">
                View Profile
              </Link>
            ),
          },
        ]}
        title="Edit"
        onClick={() => document.getElementById("modalId").click()}
      />
    </div>
  );
};

export default Contractors;
