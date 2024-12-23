import { useState } from "react";

function TagInput() {
  const [input, setInput] = useState("");
  const [tags, setTags] = useState([]);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleTagsSubmit = (e) => {
    if ((e.key === "Enter" || e.key === ",") && input.trim() !== "") {
      e.preventDefault();
      setTags([...tags, input.trim()]);
      setInput("");
    }
  };

  const handleRemoveTag = (index) => {
    setTags(tags.filter((_, i) => i !== index));
  };

  return (
    <div className="card w-auto bg-base-300 shadow-xl mx-auto mt-5 p-4 mx-5 ">
      <div className="card-body">
        <h2 className="card-title mb-4 text-lg font-bold">Tags</h2>
        <div className="flex flex-wrap items-center gap-2 border border-base-200 p-2 rounded-md">
          {/* Render Tags */}
          {tags.map((tag, index) => (
            <div
              key={index}
              className="flex items-center bg-base-100 px-3 py-1 rounded-full border border-base-200 gap-2"
            >
              <span className="text-white text-sm font-semibold">{tag}</span>
              <button
                onClick={() => handleRemoveTag(index)}
                className="btn btn-xs  text-gray-500  hover:bg-gray-500 hover:text-white"
              >
                ✕
              </button>
            </div>
          ))}

          {/* Input Field */}
          <input
            type="text"
            placeholder="Tag Name"
            className="input input-sm input-bordered flex-grow focus:outline-none"
            value={input}
            onChange={handleInput}
            onKeyDown={handleTagsSubmit}
          />
        </div>
      </div>
    </div>
  );
}

export default TagInput;
