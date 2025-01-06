import React from 'react'
import style from "./About.module.css"

export default function About() {
  return (
    <>
        <section className= {style.bg} >

        <div className="vh-100 d-flex flex-column justify-content-center align-items-center text-center text-white">
                    <div className="container py-5 text-white text-center ">
               <h2>About component</h2>
                <i className="fa-solid fa-star py-2"></i>
                <div className='d-flex fst-italic '>
                    <p className='fs-6 p-5 lh-base'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    <p className='fs-6 p-5 lh-base'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                </div>
            </div>

                </div>

          
        </section>
    </>
  )
}
