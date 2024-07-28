//Emmanuel Torres Malena | 2021-1097

const DeleteButton = ({ handleSetDelete, id }) => {
    return (
       <>
            <button onClick={() => handleSetDelete(id)} className="hover:bg-red-600 text-white py-1 px-1 rounded transition duration-300 ease-in-out">
                <i className="fa-solid fa-trash"></i>
            </button>
       </> 
    )
}

export default DeleteButton;