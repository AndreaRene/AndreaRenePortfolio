import './Profile.scss';
import avatarthumb from '../../assets/avatars/avatarthumb.png';
import Journal from '../../components/Journal/Journal';
import journalEntries from '../../components/Journal/entries';

const Profile = () => {
  return (
    <section id="profile-page">
      <section id="about-me">
        <div className="left-side">
          <h2>
            <div>
              Hi, there.
              <br />
            </div>
            <div>
              I&apos;m <span className="pink">Andrea</span>.
            </div>
          </h2>
          <div>
            <p>I strive for concise</p>
            <p>
              and <span className="pink">performant</span> code with
            </p>
            <p>an emphasis on future-proofing.</p>
          </div>
        </div>
        <img src={avatarthumb} alt="a comic style face with glasses" />
        <div className="right-side">
          <div>
            <p>I just really like</p>
            <p>JavaScript... ok?</p>
          </div>
          <h2>
            Let&apos;s go build
            <br />
            something <span className="pink">together</span>.
          </h2>
        </div>
      </section>

      <section id="journal-section">
        <Journal entries={journalEntries} />
      </section>
    </section>
  );
};

export default Profile;
