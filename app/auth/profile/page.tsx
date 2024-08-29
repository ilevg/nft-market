import React from 'react'
interface ProfileProps {
    name?: string
}
const Page: React.FC<ProfileProps> = ({ name = 'User' }) => {
    return (
        <div className='mx-auto my-52 w-fit text-white'>
            <span className='text-[#A259FF] text-textBig'>{name} </span>
            , You are Welcome!
        </div>
    )
}

export default Page
