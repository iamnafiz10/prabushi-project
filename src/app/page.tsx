import Hero from '../app/components/hero/page';
import Details from '../app/components/details/page';
import Profile from '../app/components/profile/page';
import Card from '../app/components/card/page';
import Footerarea from '../app/components/footerarea/page';

export default function Home() {
    return (
        <>
            <Hero/>
            <Details/>
            <Profile/>
            <Card/>
            <Footerarea/>
        </>
    );
}