
import './App.css';
import './Records/Record';
import GetName from './Records/Record';

function App() {
  const RecordName = [
    {
      Roll:"1578",
      Name:"Akash",
      Class:12,
    },
    {
      Roll:"7845",
      Name:"Ram",
      Class:8,
    },
    {
      Roll:"6587",
      Name:"Vinod",
      Class:11,
    },
    {
      Roll:"1247",
      Name:"Keshav",
      Class:9,
    }
  ]
  return (
    <div>
       <GetName Roll={RecordName[0].Roll} Name={RecordName[0].Name} Class={RecordName[0].Class}></GetName>
       <GetName Roll={RecordName[1].Roll} Name={RecordName[1].Name} Class={RecordName[1].Class}></GetName>
       <GetName Roll={RecordName[2].Roll} Name={RecordName[2].Name} Class={RecordName[2].Class}></GetName>
       <GetName Roll={RecordName[3].Roll} Name={RecordName[3].Name} Class={RecordName[3].Class}></GetName>
    
    </div> 

  );
}

export default App;
