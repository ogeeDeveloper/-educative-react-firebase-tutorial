import {createContext} from "react"

// Use React Context Api to provide Firebase instace throughout the whole application form thhe top level

const FirebaseContext = createContext(null)
export default FirebaseContext