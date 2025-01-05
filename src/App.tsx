import { Ban , BookMinus , AppWindowMac  } from 'lucide-react';
import Alert from './commponet/Alert/Alert'
function App() {

  return (
  <>
  <Alert type= {"alert-wearrper"} icon={<Ban size={20}/>}
   title={"something is wrong "}
   dscription={
      "Lorem ipsum dolor sit amet consectetur adipisicing elit Nostrum  dolorem debitis rem impedit est aspernatur eligendi aliquid molestiae illum non "
  }
   > <pre >
    "Lorem ipsum dolor sit amet consectetur adipisicing elit Nostrum  
    dolorem debitis rem impedit est aspernatur eligendi aliquid 
    <a href="#">click me here </a>
    </pre></Alert>

<Alert  type= {"alert-wearrper-1"} icon={<BookMinus size={20}/>}
   title={"BookMinus"}
   dscription={
    "Lorem ipsum dolor sit amet consectetur adipisicing elit Nostrum dolorem debitis rem impedit est aspernatur eligendi aliquid molestiae illum non "
}
   />

<Alert  type= {"alert-wearrper-12"} icon={<AppWindowMac size={20}/>}
   title={"AppWindowMac"}
   dscription={
    "Lorem ipsum dolor sit amet consectetur adipisicing elit Nostrum dolorem debitis rem impedit est aspernatur eligendi aliquid molestiae illum non "
}
   />

  </>
  )
}

export default App
