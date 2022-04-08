
import './App.css';



function App2() {
  return (
    <>  
    <div className="App">
          <h1>Fill your name and create your character!</h1>
    <form>
        <div className="leftSide">
            <label for="name">Name of the character</label>
            <input placeholder="Write here the name of your character" id="namePlace" name="name"/><br />
            <label for="gender">Select gender</label>
            <select name="gender" id="gender">
                <option value="Select">Choose an option</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select>
            <label for="race">Select race</label>
            <select name="race" id="race">
                <option value="Select">Choose an option</option>
                <option value="Aarakocra">Aarakocra</option>
                <option value="Aaasimar">Aaasimar</option>
                <option value="Bugbear">Bugbear</option>
            </select>
            <label for="classType">Select Class</label>
            <select name="classType" id="classType">
                <option value="Select">Choose an option</option>
                <option value="Artificer">Artificer</option>
                <option value="Barbarian">Barbarian</option>
                <option value="Wizard">Wizard</option>
            </select>
        </div>
        <div className="rightSide">
            <p id="nameResult">Choosen name</p><br />
            <div id="genderPicture"></div>
            <div id="racePicture"></div>
            <div id="classTypePicture"></div>
        </div>
        <button>Submit</button>
    </form>
    </div>
    </>
  );
}

export default App2;