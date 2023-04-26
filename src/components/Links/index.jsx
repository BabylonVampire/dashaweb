import React from 'react'
import Link from './components/Link/Link'

const Links = ({links}) => {
    return (
        <div className='links'>
            {
                links.map((link) => {
                    return(
                        <Link link={link}/>
                    )
                })
            }
        </div>
    )
}

export default Links;
