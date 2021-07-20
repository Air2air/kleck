import React, { useState, useEffect } from "react";
import TextInput from "./../../components/TextInput";
import UserService from "./../../api/user.service";

const UserPage = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    UserService.getUserPage().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);
      }
    );
  }, []);

  return (
    <div className="container">
      <p>{content}</p>
      <TextInput />
    </div>
  );
};

export default UserPage;
