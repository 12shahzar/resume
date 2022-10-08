import React from 'react';
import ReactDOM from 'react-dom';
import './resume.css'

const Cv = () => {
  return <div className="main">
    <div className="header" >
      <div className="header_left"> <strong>M U H A M M A D </strong> <br />  <p className="bottom"><strong> S H A H Z A R  R A Z A </strong></p><p className="left_bottom">FULL STACK DEVELOPER</p>
      </div>
      <div className="header_right"></div>
    </div>
    <div className="body" >
      <div className="body_left">
        <div className="contact"><p className="word">CONTACTS</p>
          <div className="c"><p className="fp" >PHONE :</p> <p>0310-1215312</p></div>
          <div className="c"><p className="fp" >EMAIL :</p> <p>12Shahzar@gmail.com</p></div>
          <div className="c"><p className="fp" >WEB :</p> <p>Shahzar.com</p></div>
          <div className="c"><p className="fp" >ADDRESS :</p> <p>Surjani Town Sector L1 House no #RI-86</p></div>
        </div>
        <div className="skill"><p className="word">SKILLS</p>
          <div className="c"><p className="fp" >HTML</p> <div className="know"></div></div>
          <div className="c"><p className="fp" >CSS</p><div className="know"></div> </div>
          <div className="c"><p className="fp" >JAVASCRIPT</p><div className="know"></div></div>
          <div className="c"><p className="fp" >ES6</p> <div className="know"></div></div>
          <div className="c"><p className="fp" >REACT</p> <div className="know"></div></div>
          <div className="c"><p className="fp">MANGO DB</p> <div className="know"></div></div>
        </div>
        <div className="education"><p className="word">EDUCATION</p>
          <div className="c"><p className="fp" >MATRICULATION -2019</p></div>
          <div className="c"><p className="fp" >INTERMIDIATE-2021</p></div>
          <div className="c"><p className="fp" >Start GRADUTION-2022</p></div>
          <div className="c"><p className="fp" >APTECH ACCP-2019</p></div>
        </div>
      </div>
      <div className="body_right">
        <div className="profile"><p className="word">PROFILE</p>
          <div className="profile_para"> Full stack developers are required to be proficient in front end development and back end web development, coding with HTML, CSS, and JS for the client-side and maintaining databases and infrastructure server-side.</div>
        </div>
        <div className="experience"><p className="word">EXPERIECE</p>
          <div className="experience_para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque facere est provident sed necessitatibus expedita, hic modi laborum corporis eos minus quae nulla, veritatis doloribus, neque quod autem nobis ratione minima ut tempora cupiditate? Dolorem, debitis aspernatur sequi maiores dignissimos neque sit vitae porro nesciunt officiis officia sed exercitationem alias quidem, tempore soluta odio excepturi ipsum delectus, magnam modi. Distinctio laudantium labore nisi porro tenetur a iusto enim ut temporibus.</div>
        </div>
      </div>
    </div>

  </div>;
}

ReactDOM.render(<Cv />, document.querySelector('#root'));