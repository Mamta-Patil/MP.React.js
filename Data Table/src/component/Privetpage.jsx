import React from 'react'

const Privetpage = ({children}) => {
    const isauth=localStorage.getItem("token")
    console.log(isauth)
    if(!isauth)
    {
        // alert("you are not login")
        window.location.href="/Login"
    }
    else
    {
        return children
    }
}

export default Privetpage
