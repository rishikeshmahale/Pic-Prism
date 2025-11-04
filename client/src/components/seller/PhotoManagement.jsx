import React from 'react';
import DashboardHeader from '../DashboardHeader.jsx';
import ImageAdd from '../ImageAdd.jsx';

const PhotoManagement = () => {
  return (
    <div className='flex flex-col sm:flex-row'>

          <div>
              <DashboardHeader />
              <ImageAdd />
          </div>
          
    </div>
  )
}

export default PhotoManagement
