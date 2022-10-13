import { useState } from 'react'

const Toggle = () => {
    const [toggle, setToggle] = useState(true);
    
    const handleToggle = () => {
        setToggle(!toggle);
    }
    
    return (
        <div>
            <button onClick={handleToggle}>{toggle ? 'Yes' : 'No'}</button>
        </div>
    )
}

export default Toggle