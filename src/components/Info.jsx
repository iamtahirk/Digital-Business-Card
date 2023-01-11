export default () => (
    <>
        <img src="/images/profile-img.png" alt="" className="profile-img" />
        <div className="infocontainer">
            <h1 className="name">M. Tahir Khan</h1>
            <h4 className="jobtitle">Frontend Developer</h4>
            <p className="website"><a href="http://itahir.dev">itahir.dev</a></p>

            <div className="btn-container">
                <button className="btn btn-white">
                    <img src="/images/email_icon.png" alt="" /><a href="mailto:muhammadtahirk@gmail.com">Email</a>
                </button>
                
                <button className="btn btn-blue">
                    <img src="/images/linkedin_icon.png" alt="" /><a href="https://www.linkedin.com/in/tahirk1/">Linkedin</a>
                </button>
            </div>
        </div>
    </>
)