import '../styles/admindashboard.css'
const AdminDashboard = () => {
    return (
        <div className="admindashboard">
            <div className="blogs">

                <img width="650px" height="300px" src="https://img.freepik.com/free-vector/white-gray-geometric-pattern-background-vector_53876-136510.jpg?auto=format&h=200" alt="" />

                <div className="content">
                    <h2>Signature Series: In the News with Fareed Zakaria</h2>
                    <p style={{ color: "black" }} >Library’s Signature Series is pleased to welcome bestselling author and journalist Fareed Zakaria
                        to the Library’s Berkley Theater on Thursday, February 2 at 7:00 p.m. for a discussion about current
                        geopolitical topics and trends. This event will take place both in-person and via livestream.</p>
                </div>
            </div>

            <div className="blogs2">
                <div className="blogs">

                    <img width="650px" height="300px" src="https://img.freepik.com/free-vector/white-gray-geometric-pattern-background-vector_53876-136510.jpg?auto=format&h=200" alt="" />

                    <div className="content">
                        <h2>At the Library this January …</h2>
                        <p style={{ color: "black" }} >Library has a full schedule of (free!) enrichment events
                         throughout January. Speak with a librarian or check the online calendar to sign up for any of the below
                         A number of popular music sessions are planned for our youngest patrons.</p>
                    </div>
                </div>
            </div>

            <div className="blogs3">
                <div className="blogs">

                    <img width="650px" height="300px" src="https://img.freepik.com/free-vector/white-gray-geometric-pattern-background-vector_53876-136510.jpg?auto=format&h=200" alt="" />

                    <div className="content">
                        <h2>Friends Friday Films Announces Its Winter Screenings</h2>
                        <p style={{ color: "black" }} >The Friends Friday Film Series seeks to provide audiences with 
                         a diverse array of films to enjoy. Featuring new Hollywood hits, award winners, documentaries, international 
                         titles, and films that highlight concurrent events at the Library, there is something for everyone in this lineup. English language 
                         films are shown with closed cations.</p>
                    </div>
                </div>
            </div>




        </div>
    );
}

export default AdminDashboard;