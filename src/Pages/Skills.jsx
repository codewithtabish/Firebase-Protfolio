import React,{useState,useEffect} from 'react'
import { Line, Circle } from 'rc-progress';
import ProgressBar from "@ramonak/react-progress-bar";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
const Skills = () => {
  const [html, sethtml] = useState(20)
  const [css, setCss] = useState(30)
  const [js, setJs] = useState(40)
  const [bootstrap, setBootstarp] = useState(20)
  const [tailwindCss, setTailwindCss] = useState(40)
  const [react, setReactJs] = useState(10)
  const [node, setNodeJs] = useState(0)
  const [express,setExpressJs] = useState(10)
  const [mongoDb,setMongO] = useState(10)
  const [git,setGit] = useState(10)
  const [graphql,setGraphql] = useState(10)
  
  useEffect(() => {
   setInterval(() => {
    sethtml(80)
    
   }, 2000);
   setInterval(() => {
    setCss(90)
    
   }, 1000);
   setInterval(() => {
    setJs(75)
  
    
   }, 1200);
   setInterval(() => {
    setBootstarp(85)
  
    
   }, 1500);
   setInterval(() => {
    setReactJs(78)
  
    
   }, 1100);
   setInterval(() => {
   setTailwindCss(88)
  
    
   }, 2300);
   setInterval(() => {
    setNodeJs(55)
  
  
    
   }, 2100);
   setInterval(() => {
    setExpressJs(77)
  
  
    
   }, 2400);
   setInterval(() => {
   setMongO(83)
  
  
    
   }, 1800);
   setInterval(() => {
   setGit(66)
  
  
    
   }, 1400);
   setInterval(() => {
   setGraphql(66)
  
  
    
   }, 1400);
  }, [])
  
  return (
    <div className='md:py-12 py-8 container mx-auto'>
      <h1 className='text-2xl font-medium py-8 text-center mr-12'>MY Skills</h1>
      <div className='grid sm:grid-cols-3 grid-cols-1 xms:grid-cols-2 lg:grid-cols-5 gap-5 items-center'>

    
      <div >
       
      <CircularProgressbarWithChildren value={html}>
  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
  <h3 className='py-3'>Html</h3>
  {/* <img style={{ width: 40, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" /> */}
  <div style={{ fontSize: 12, marginTop: -5 }}>
    <strong className='text-xl font-semibold'>{`${html} %`}</strong> 
  </div>
</CircularProgressbarWithChildren>;
   </div>
      <div >
       
      <CircularProgressbarWithChildren value={css}>
  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
  <h3 className='py-3'>CSS</h3>
  {/* <img style={{ width: 40, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" /> */}
  <div style={{ fontSize: 12, marginTop: -5 }}>
    <strong className='text-xl font-semibold'>{`${css} %`}</strong> 
  </div>
</CircularProgressbarWithChildren>;
   </div>
      <div >
       
      <CircularProgressbarWithChildren value={js}>
  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
  <h3 className='py-3'>JavaScript</h3>
  {/* <img style={{ width: 40, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" /> */}
  <div style={{ fontSize: 12, marginTop: -5 }}>
    <strong className='text-xl font-semibold'>{`${js} %`}</strong> 
  </div>
</CircularProgressbarWithChildren>;
   </div>
      <div >
       
      <CircularProgressbarWithChildren value={bootstrap}>
  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
  <h3 className='py-3'>BootStrap</h3>
  {/* <img style={{ width: 40, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" /> */}
  <div style={{ fontSize: 12, marginTop: -5 }}>
    <strong className='text-xl font-semibold'>{`${bootstrap} %`}</strong> 
  </div>
</CircularProgressbarWithChildren>;
   </div>
      <div >
       
      <CircularProgressbarWithChildren value={react}>
  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
  <h3 className='py-3'>React JS</h3>
  {/* <img style={{ width: 40, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" /> */}
  <div style={{ fontSize: 12, marginTop: -5 }}>
    <strong className='text-xl font-semibold'>{`${react} %`}</strong> 
  </div>
</CircularProgressbarWithChildren>;
   </div>
      <div >
       
      <CircularProgressbarWithChildren value={tailwindCss}>
  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
  <h3 className='py-3'>Tailwind CSS</h3>
  {/* <img style={{ width: 40, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" /> */}
  <div style={{ fontSize: 12, marginTop: -5 }}>
    <strong className='text-xl font-semibold'>{`${tailwindCss} %`}</strong> 
  </div>
</CircularProgressbarWithChildren>;
   </div>
      <div >
       
      <CircularProgressbarWithChildren value={node}>
  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
  <h3 className='py-3'>Node Js</h3>
  {/* <img style={{ width: 40, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" /> */}
  <div style={{ fontSize: 12, marginTop: -5 }}>
    <strong className='text-xl font-semibold'>{`${node} %`}</strong> 
  </div>
</CircularProgressbarWithChildren>;
   </div>
      <div >
       
      <CircularProgressbarWithChildren value={node}>
  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
  <h3 className='py-3'>Express Js</h3>
  {/* <img style={{ width: 40, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" /> */}
  <div style={{ fontSize: 12, marginTop: -5 }}>
    <strong className='text-xl font-semibold'>{`${express} %`}</strong> 
  </div>
</CircularProgressbarWithChildren>;
   </div>
      <div >
       
      <CircularProgressbarWithChildren value={node}>
  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
  <h3 className='py-3'>MongoDb</h3>
  {/* <img style={{ width: 40, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" /> */}
  <div style={{ fontSize: 12, marginTop: -5 }}>
    <strong className='text-xl font-semibold'>{`${mongoDb} %`}</strong> 
  </div>
</CircularProgressbarWithChildren>;
   </div>
      <div >
       
      <CircularProgressbarWithChildren value={node}>
  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
  <h3 className='py-3'>Git</h3>
  {/* <img style={{ width: 40, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" /> */}
  <div style={{ fontSize: 12, marginTop: -5 }}>
    <strong className='text-xl font-semibold'>{`${git} %`}</strong> 
  </div>
</CircularProgressbarWithChildren>;
   </div>
      <div >
       
      <CircularProgressbarWithChildren value={graphql}>
  {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
  <h3 className='py-3'>Graphql</h3>
  {/* <img style={{ width: 40, marginTop: -5 }} src="https://i.imgur.com/b9NyUGm.png" alt="doge" /> */}
  <div style={{ fontSize: 12, marginTop: -5 }}>
    <strong className='text-xl font-semibold'>{`${graphql} %`}</strong> 
  </div>
</CircularProgressbarWithChildren>;
   </div>
 
</div>


    </div>
  )
}

export default Skills