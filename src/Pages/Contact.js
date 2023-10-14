    import React from 'react'
    
    const Contact = () => {
      return (
       
        <div className='mb-[10px] '>
         <div name='contact' className='w-full h-screen bg-[#eceaea] flex justify-center items-center p-4'>
      
      <form method="POST" action='https://getform.io/f/01bb9c33-6bd0-4585-be4d-efc169d667be' className='max-w-[700px] flex flex-col w-full h-full'>
  
          <div className='max-w-[1000px] -mt-[50px]  p-4 flex flex-col justify-center w-full h-full'>
              
              <p className='text-[35px] heading font-bold inline border-b-4 border-[#000000] text-[#164154] pb-[1px]'>Reach Out To Our SAGES</p>
              <p className='text-[#164154] py-2 text-start text-[17px] -pb-[100px]'>
                  Submit the form below or send us an mail - info@wethesage.com
              </p>
          </div>          
          <input className='bg-[#164154] text-[#fff] p-2 my-2 rounded-lg' type='text' placeholder='Name' name='name' >
          </input>
          <input type='email' placeholder='Email' name='email'className=' text-[#fff] my-2 p-2 bg-[#164154]  rounded-lg' >
          </input>
          <input type='text' placeholder='Subject' name='subject'className=' text-[#fff] my-2 p-2 rounded-lg bg-[#164154] ' >
          </input>
          <textarea className=' text-[#fff] bg-[#164154]  rounded-lg p-2 my-1' name='message' cols='30' rows="10" placeholder='Message'>
          </textarea>          
          <button className='text-[#164154] hover:text-[#fff] border-2 hover:bg-[#bcad3c] border-[#bcad3c] hover:border-[#164154] px-4 py-2 my-8 mx-auto flex items-center rounded-md'>Send Message</button>
      </form>
      </div>
    </div>
      )
    }
    
    export default Contact
    
   