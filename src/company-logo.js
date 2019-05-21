import React from 'react'

const Company = (props) =>{
   let arr= props.logo

  return(props.logo.map((logo, i)=> 
  <svg xmlns="http://www.w3.org/2000/svg" width="27%" height="27" viewBox="0 0 200 32">
  <path
      d={props.logo[i].d}>
  </path>
</svg> )

    )

}
export default Company