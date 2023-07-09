import { SideBar } from './components/SIdebar'
import { SectionHomeContent } from './components/Sections/SectionHomeContent'

export const Home = () => {
    return (
        <main className='flex'>
            
            <SideBar />
            <SectionHomeContent />
        </main>

    )
}
