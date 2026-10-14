import { useState } from "react"

const NoteForm = () => {
    
    const [formData, setFormData] = useState({
        title: '',
        category: 'work',
        priority: 'Medium',
        description: ''
    })

    const [isFormVisible, setIsFormVisible] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return(
        <>
            <button 
                className="w-full.bg-gray-100.border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover: bg-purple-200 hover: border-purple-300 trasintion mb-4"
                onClick={()=>setIsFormVisible(isFormVisible)}   
            >
                {isFormVisible ? 'Hide Form X' : 'Add New Noet +'}
                
            </button>

            {isFormVisible && (
                <Form onSubmit={handleSubmit} className="mb-6">
                    <div className="mb-4"></div>
                </Form>
            )}

        </>
    )
}
 
export default NoteForm;