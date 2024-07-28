//Emmanuel Torres Malena | 2021-1097

import CardButtonContainer from './TodoCardComponents/CardButtonContainer'
import DeleteButton from './TodoCardComponents/DeleteButton'
import CompleteButton from './TodoCardComponents/CompleteButton'

const TodoCard = () => {
    return (
        <div className="max-w-sm mx-auto bg-gray-700 rounded-lg overflow-hidden md:max-w-2xl">
            <div className="p-3">
                <p className="line-clamp-5">
                    Aquí puedes colocar el contenido de tu tarjeta. Si el texto es muy largo, Tailwind CSS te ayuda a manejar la forma en que se presenta para que no se desborde.
                    Esto incluye usar `line-clamp` para limitar el número de líneas visibles, asegurando que el 
                    texto se mantenga dentro de los límites de la tarjeta.
                </p>

                <CardButtonContainer>
                    <CompleteButton/>
                    <DeleteButton/>
                </CardButtonContainer>

            </div>
        </div>
    )
}

export default TodoCard;