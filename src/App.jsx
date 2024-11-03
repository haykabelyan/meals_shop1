import {HomePage} from './pages/HomePage';
import {AboutPage} from './pages/AboutPage';
import {ContactPage} from './pages/ContactPage';
import {NotFoundPage} from './pages/NotFoundPage';
import {MealsPage} from './pages/MealsPage';
import {DetailPage} from './pages/DetailPage';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import { Routes, Route } from 'react-router-dom';

export default function App(){


    return <>
        <Header />
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/meals/:name' element={<MealsPage />} />
            <Route path='/detail/:id' element={<DetailPage />} />
            <Route path='*' element={<NotFoundPage />} />
        </Routes>
        <Footer />
    </>;
}