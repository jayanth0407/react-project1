import React from 'react'

function Aleart(props) {
  const captalize =(word)=>{
    const lower=word.toLowerCase()
    return lower.charAt(0).toUpperCase() + lower.slice(1).toLowerCase()
  }
  return (
   <div style={{height:'50px'}}>
     <div>
  { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{props.alert.type}</strong>:{props.alert.msg}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>}
      
    </div>
   </div>
  )
}

export default Aleart
