
import { useForm } from "../../hooks/useForm";

export const TodoAdd = ({ handleAdd }) => {
  const { description, handleInputChange, handleReset } = useForm({
    description: "",
  });


  const onFormSubmit = (e) => {
    e.preventDefault();

    if(description.length <= 1) return;
    handleAdd({
        id: new Date().getTime(),
        description: description,
        done: false
    });

    handleReset();
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="¿Que vamos a hacer?"
        className="form-control"
        name="description"
        onChange={handleInputChange}
        value={description}
      />

      <button className="btn btn-success mt-2" type="submit">
        Agregar
      </button>
    </form>
  );
};
