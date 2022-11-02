import React from 'react'

const Footer = () => {
  return (
    <footer className='grid grid-cols-1 md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100'>
        <div className='space-y-4 text-xs text-gray-600'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How AirBnB works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>AirBnB Plus</p>
            <p>AirBnB Luxe</p>
        </div>
        <div className='space-y-4 text-xs text-gray-600'>
        <h5 className='font-bold'>COMMUNITY</h5>
            <p>Accessibility</p>
            <p>This is not a real site</p>
            <p>Its a pretty awesome clone</p>
            <p>Refferals accepted</p>
            <p>Carlos Cat</p>
        </div>
        <div className='space-y-4 text-xs text-gray-600'>
        <h5 className='font-bold'>HOST</h5>
            <p>Become a host</p>
            <p>Another link</p>
            <p>Something else</p>
            <p>Useful info</p>
            <p>You are awesome</p>
        </div>
        <div className='space-y-4 text-xs text-gray-600'>
        <h5 className='font-bold'>SUPPORT</h5>
            <p>Help Centre</p>
            <p>Trust & Safety</p>
            <p>Say Hi</p>
            <p>Contact</p>
            <p>Contact Carlos</p>
        </div>
        <div></div>
    </footer>
  )
}

export default Footer