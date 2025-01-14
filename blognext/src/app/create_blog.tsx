import React, { FormEvent, useState } from "react";
import { data } from "react-router-dom";

const create_blog = () => {
  const [responseMsg, setResponseMsg] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;
    try {
      const response = await fetch(
        `http://localhost:9000/api/blogs?title=${encodeURIComponent(title)}&content=${encodeURIComponent(content)}`
      );
      const data = await response.json();

      if (data.message) {
        setResponseMsg(data.message);
      } else if (data.error) {
        setResponseMsg(`Error: ${data.error}`);
      }
    } catch (error) {
      setResponseMsg(`Error: ${(error as Error).message}`);
    }
  };

  return (
    <>
      <div className="container" style={{ marginTop: "15px" }}>
        <form onSubmit={handleSubmit} id="form">
          <div className="form-group">
            <label htmlFor="title">
              <h3>title</h3>
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              placeholder="max 100 chars"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="hashes">
              <h3>select hashtags</h3>
            </label>
            {/* Example for multi-select dropdown */}
            <select multiple className="form-control" id="hashes">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="content">
              <h3>content</h3>
            </label>
            <textarea
              name="content"
              id="content"
              className="form-control"
              rows={10}
              placeholder="max 10k chars"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn bg-dark"
            style={{ marginBottom: "50px" }}
          >
            submit
          </button>
        </form>
        <div id="response-msg">{responseMsg}</div>
      </div>
    </>
  );
};

export default create_blog;
