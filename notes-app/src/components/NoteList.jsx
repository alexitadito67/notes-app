const Notelist = ({notes}) => {
    if(notes.lenght == 0){
        return(
            <p className="text-center text-gray-500">
                No Notes yet!
            </p>
        )
    }

    return(
        <div className="space-y-4">
            {notes.map((note) => 
                <div key={note.id} className="p-4 bg-white rounded-lg shadow-md border-1-4">
                    <h3 className="text-lg fond-bold">
                        {note.title}
                    </h3>

                </div>)}
        </div>
    )
} 