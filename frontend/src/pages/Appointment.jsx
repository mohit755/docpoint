
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Appointment = () => {

  const {docId} = useParams()
  const {doctors} = useContext(AppContext)


  const [docInfo, setDocInfo] = useState(null)

  const fetchDocInfo = async () => {
    const docInfo = doctors.find( doc => doc._id === docId)
    setDocInfo(docInfo
      
    )
    console.log(docInfo)
  }


  useEffect(()=> {
   fetchDocInfo()
  },[doctors,docId])

 

  return  docInfo && (
    <div>
      {/**----------Doctors Details-------- */}
      <div className='flex f;ex-col sm:flex-row gap-4 '>
        <div>
        <img src={docInfo.image} alt="" />
        </div>

        <div>
          {/**----------- doc info ------------ */}
          <p>{docInfo.name} 
            <img src={assets.verified_icon} alt="" />
          </p>
          <div>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button>{docInfo.experience}</button>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Appointment
