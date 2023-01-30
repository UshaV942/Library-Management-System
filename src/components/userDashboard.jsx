import '../styles/userDashboard.css'
const USerDashboard = () => {
   return (
      <div className="userDashboard">
         <div className="design">
            <div className="learninglabdiv">
               <div className='learninglab'>
                  <h1>Learning Lab</h1>
               </div>
               <div className="para">
                  <p className="labDesc">The mission of the Library’s Learning Lab is to create an environment in which Library staff and patrons can empower themselves with a practical understanding of current technology.</p>
               </div>
            </div>

            <div className="learningonline">
               <div className="newsimg">
                  <img src="/images/news img.webp" width="900px" height="400px" alt="" />
               </div>
               <div className="imgdesp">
                  <p>LEARN</p>
                  <p style={{ fontSize: "33px" }} >Questions About the Digital Library?</p>
                  <p>Our Digital Library quick guides or video tutorials will help you access eBooks, audiobooks, videos, music, and magazines from any device.</p> <br />
                  <button className='getbtn'> Get Started </button>
               </div>
            </div>
        
        <div className="gethelp">
             <div className="gethelpdesp">
              <div className="helppara">
              <p style={{fontSize:"45px",color:"white"}}> <b> Learn Something New or Get Tech Help</b></p>
               <p  className='subpara' style={{fontSize:"20px",color:"white"}} >Register on the online calendar. For more information call (203) 622-7920.</p>
              </div>
               <button className='regbtn'>Register Here</button>
             </div>
        </div>

        <div className="btnitems">
         <div className="part1">
             <h3 style={{fontSize:"25px"}}>Sign Up for Our Newsletter</h3>
             <p>Stay up to date with library events, new</p>
                   <p>books, or what's going on in our</p>
                   <p>community.</p>
                   <button className='sdbtn'>Sign Up</button>

         </div>
         <div className="part2">
                   <h3  style={{fontSize:"25px"}} >Support The Library</h3>
                   <p>Donate today and help ensure that the Library</p>
                   <p>continues to evolve to meet the needs of our</p>
                   <p>community.</p>
                   <button className='sdbtn'>Donate Now</button>
         </div>
        </div>


  
         </div>
      </div>
   );
}

export default USerDashboard;