import { SideBar } from './components/SIdebar'
import { SectionHomeContent } from './components/Sections/SectionHomeContent'
import { useContext } from 'react'
import { GoogleContext } from './Context/GoogleContext'
export const Home = () => {

    const {googleCredential} = useContext(GoogleContext)
    return (
        <main className='flex'>
            
            <SideBar />
            <SectionHomeContent />
        </main>

    )
}
