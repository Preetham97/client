import {Outlet} from 'react-router-dom'
import Headers from './Header';

export default function Layout(){
    return (
        <main>
            <Headers />
            <Outlet />
        </main>
    )
}