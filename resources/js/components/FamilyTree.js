import Tree from "react-d3-tree";
import { useEffect, useState } from 'react'
import { useCenteredTree } from "../helper";
import Header from "./Header";
import AddMember from "./forms/AddMember";
//import '../css/style.css'
import MemberDetails from "./MemberDetails";
import * as api from './api/Api'

const containerStyles = {
  display: "flex",
  width: "100vw",
  height: "100vh",
  marginTop: "5rem"
};


export default function FamilyTree() {
   const [dimensions, translate, containerRef] = useCenteredTree();
   const[show, setShow] = useState(false)
   
  const [details, setDetails] = useState({})

  const toggle = () => {
     return setShow(!show)
   }

  const [data, setData] = useState([])

  useEffect(async() => {
      setData(await api.getTree())
  }, [setData])

  // const onClick = (name) => {
  //   setDetails(name)
  //   console.log(details)
    
  // }

   const renderRectSvgNode = ({ nodeDatum }) => (
    <g>
      <rect width="50" height="50" x="-25" onClick={() => setDetails(nodeDatum)} />
      <text fill="black" strokeWidth="1" x="35" y="25">
        {nodeDatum.name}
      </text>
      {/* {nodeDatum.attributes?.department && (
        <text fill="black" x="20" dy="20" strokeWidth="1">
          Department: {nodeDatum.attributes?.department}
        </text>
      )} */}
    </g>
  );
  const close = () => {
    setDetails({})
  }

  const a =  {
    id: 1,
    name: 'Ibrahim',
    parent_id: 0,
    children: [
        {
            id: 2,
            name: 'Abdul',
            parent_id: 1
        },
        {
            id: 3,
            name: 'Hasifah',
            parent_id: 1,
            children: [
                {
                    id: 4,
                    name: 'Abdu',
                    parent_id: 3
                }
            ]
        },
        {
            id: 5,
            name: 'Ali',
            parent_id: 1,
            children: [
                {
                    id: 6,
                    name: 'Aisha',
                    parent_id: 4,
                    children: [
                        {
                            id: 7,
                            name: 'Juma',
                            parent_id: 6
                        }
                    ]
                }
            ]
        }
    ]
}
// console.log('Data is: ', data)
  return (
    <>
    {details.name && <MemberDetails close={close} details={details} />}
    { show && <AddMember toggle={toggle} /> }
    <Header toggle={toggle} />
    
    <div style={containerStyles} ref={containerRef}>
        <Tree
        data={a}
        dimensions={dimensions}
        translate={translate}
        renderCustomNodeElement={renderRectSvgNode}
        orientation="vertical"
        collapsible={false}
        pathFunc="step"
        zoomable={false}
      />
    </div>
    
    </>
    
  );
}
