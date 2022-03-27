import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import React, { useState, useEffect, useRef } from 'react'
// import Link from 'next/link'
import Editor from '../components/Editor';

export default function Home() {
  const [showText, setShowText] = useState(false);
  const [editorLoaded, setEditorLoaded] = useState(false);
  const [data, setData] = useState("");
  const [formvalue, setFormvalue] = useState({})
  useEffect(() => {
    setEditorLoaded(true);
  }, []);

  return (
    <>
      <Header />
      <div className="container ">
        <h1 className='text-center'>
          Career Dashboard
        </h1>
        <form>
          <input className='job-title' type="text" name="title" placeholder='Title' onChange={(e) => setFormvalue({ ...formvalue, load:false,  title: e.target.value })} />
          <select name="jobType" className='employment-type'>
            <option value="" disabled selected>Employment Type</option>
            <option value="Full">Full Time</option>
            <option value="Full">Part Time</option>
            <option value="Full">Contract</option>
            <option value="Full">Temporary</option>
            <option value="Full">Volunteer</option>
            <option value="Full">Internship</option>
          </select>
          <input type="text" name="Location" placeholder='Location' className='location' />
          <select name="job-selection" className='job-selection'>
            <option value="1" disabled selected>Job Selection</option>
            <option value="2" selected>Businees System</option>
            <option value="3">Design</option>
            <option value="">Engineering</option>
            <option value="">Finance</option>
            <option value="">Human Resources</option>
            <option value="">Legal</option>
            <option value="">Marketing</option>
            <option value="">Operations</option>
            <option value="">Product</option>
            <option value="">Sales</option>
            <option value="">Support</option>
          </select>
          <select name="workPlacetype" className='work-place' onChange={(e) => setFormvalue({ ...formvalue, workPlacetype: e.target.value })}>
            <option value="" disabled selected>Workplace Type</option>
            <option value="Full">On Site</option>
            <option value="Full">Hydrid</option>
            <option value="Full">Remote</option>
          </select>
          <select name="paid" className='paid'>
            <option value="" disabled selected>Paid/Gratis</option>
            <option value="Full">Paid</option>
            <option value="Full">Gratis</option>
          </select>
          <textarea rows="1" cols="50" name="description" className='description' placeholder='Short Description (150 words)' onChange={(e) => setFormvalue({ ...formvalue, description: e.target.value })}>

          </textarea>
          <div className='job-box'>
            <h2>
              Add a job description
            </h2>

            <p>Description*</p>
            <Editor
              name="description"
              onChange={(data) => {
                setData(data);
              }}
              editorLoaded={editorLoaded}
            />

            {/* {JSON.stringify(data)} */}
            <h3>
              Add Skill
            </h3>
            <p>
              Add skill keyboard to make your job more visible to the right candidates(Select upto 10)
            </p>
            <button className='add-skill'>
              Add Skill +
            </button>
          </div>
          <input type="button" value="Submit" className='submit-btn' onClick={(e) => setFormvalue({ ...formvalue, load: true })}></input>
        </form>
        {formvalue.load ? <div className='card'>
        <h3>
          {formvalue.title}
        </h3>
        <p>
         <span>
         {formvalue.description}
         </span>
        </p>
        <p>
        {formvalue.workPlacetype}
        </p>
      </div> : null}
      </div>
   


      <Footer />
    </>
  )
}

