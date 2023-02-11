import { createContext, useState } from "react";
const UserContext = createContext();


export function ContexProvider({children}){
    const [signup,setSignup] = useState(false)
    
    
    return(
        <UserContext.Provider value={{setSignup,signup}} >
            {children}
        </UserContext.Provider>
    )

}
export default UserContext;