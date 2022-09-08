import React from "react";
import { useCreatePostMutation } from "./services/post";

function Create() {
  const [createPost, responceinfo] = useCreatePostMutation();

  return <div>Create Data</div>;
}

export default Create;
