//import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { createAnecdote } from "../reducers/anecdoteReducer";

const AnecdoteForm = (props) => {
  //const dispatch = useDispatch();

  const addNew = (e) => {
    e.preventDefault();
    const content = e.target.content.value;
    e.target.content.value = "";
    //dispatch(createAnecdote(content));
    props.createAnecdote(content);
  };
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addNew}>
        <div>
          <input name="content" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};
export default connect(null, { createAnecdote })(AnecdoteForm);
