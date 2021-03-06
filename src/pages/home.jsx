import BaseComponent from "../components/BaseComponent";
// import "../assets/happy.png";

const Home = () => {
  return (
    <BaseComponent
      headerContent={
        <div>
          <h1 id="pageTitle">Välkommen till hundcentralen</h1>
        </div>}
      mainContent={
        <div>
        <p style={{textAlign: 'center'}}>Hundar Utan Hem är en ideell förening som omplacerar svenska hundar och räddar avlivningshotade hundar på Irland, Kanarieöarna och i Polen.

Föreningen grundades 2005 med ett mål – att rädda hundar som riskerar att avlivas och ge dem en andra chans till ett lyckligt liv.

Vill du hjälpa en hund, samtidigt som du får en kär familjemedlem?</p>
        </div>
      }
    />
  );
};

export default Home;
