import React from 'react'
import { SideBar } from './Components/SIdebar'
import { SectionHomeContent } from './Components/Sections/SectionHomeContent'

export const Home = () => {
    return (
        <main className='flex'>
            <SideBar />
            <SectionHomeContent />
        </main>

    )
}
