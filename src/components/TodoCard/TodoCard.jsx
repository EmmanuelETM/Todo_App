//Emmanuel Torres Malena | 2021-1097

import CardButtonContainer from './TodoCardComponents/CardButtonContainer'
import DeleteButton from './TodoCardComponents/DeleteButton'
import CompleteButton from './TodoCardComponents/CompleteButton'

const TodoCard = (props) => {

    const {
        content,
        handleSetComplete,
        handleSetDelete
    } = props

    const {
        id, 
        title,
        details,
    } = content

    return (
        <div className="flex flex-col max-w-sm w-full mx-auto bg-gray-700 rounded-lg overflow-hidden md:max-w-2xl">
            <div className="p-3 flex-1">
                <CardButtonContainer>
                    <CompleteButton handleSetComplete={handleSetComplete} content={content}/>
                    <DeleteButton handleSetDelete={handleSetDelete} id={id}/>
                </CardButtonContainer>
                
                <h1 className="text-xl font-bold line-clamp-2">
                    {title}
                </h1>
                <p className='mt-2 line-clamp-5'>
                    {details}
                </p>
            </div>
        </div>
    )
}

export default TodoCard;