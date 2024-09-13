import './Profile.scss';
import avatarthumb from '../../assets/avatars/avatarthumb.png';
import Journal from '../../components/Journal/Journal';
import journalEntries from '../../components/Journal/entries';

const Profile = () => {
    return (
        <section id="aboutMe">
            <h1 className='left'>
                <div>
                    Hi, there.<br />
                </div>
                <div>
                    I&apos;m <span className='pink'>Andrea</span>.
                </div>
            </h1>
            <img src={ avatarthumb } alt="a comic style face with glasses" />
            <div className='right hiddenAbout flair'>
                <p>I just really like</p>
                <p>JavaScript... ok?</p>
            </div>
            <div className='left hiddenAbout'>
                <p>I strive for concise and</p>
                <p><span className='pink'>performant</span> code with an</p>
                <p>emphasis on future-proofing.</p>
            </div>
            <h2 className='right'>
                Let&apos;s go build<br />
                something <span className='pink'>together</span>.
            </h2>

            {/* Pass the imported journal entries to the Journal component */ }
            <Journal entries={ journalEntries } />
        </section>
    );
};

export default Profile;
