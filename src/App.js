
import './App.css';
import './Records/Record';
import GetName from './Records/Record';
import sl1 from './assets/img/sl1.jpg'
import sl2 from './assets/img/sl2.jpg'
import sl3 from './assets/img/sl3.jpg'

function App() {
  
  const cardData =[
    {
      imageName:sl1,
      heading:"Cpmponents",
      desc:"Description 1 In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as"
    },
    {
      imageName:sl2,
      heading:"State",
      desc:"Description 2 In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as"
    },
    {
      imageName:sl3,
      heading:"Events",
      desc:"Description 3 In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as"
    }
  ]
  return (
    <div>
       {/* <GetName Roll={RecordName[0].Roll} Name={RecordName[0].Name} Class={RecordName[0].Class}></GetName>
       <GetName Roll={RecordName[1].Roll} Name={RecordName[1].Name} Class={RecordName[1].Class}></GetName>
       <GetName Roll={RecordName[2].Roll} Name={RecordName[2].Name} Class={RecordName[2].Class}></GetName>
       <GetName Roll={RecordName[3].Roll} Name={RecordName[3].Name} Class={RecordName[3].Class}></GetName> */}
<div className='row'>
      {cardData.map(item => (
      <div class="card" style={{width:300}}>
        <img style={{width:300}} class="card-img-top" src={item.imageName} alt={item.heading} />
        <div class="card-body">
          <h5 class="card-title">{item.heading}</h5>
          <p class="card-text">{item.desc}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      ))}
</div>
    
    </div> 

  );
}

export default App;
