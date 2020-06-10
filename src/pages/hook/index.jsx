import React, { useState,useEffect  } from 'react'
import { connect } from 'react-redux'
import { defaultData } from '@/actions/hook'
 function Text(props) {
   const { defaultData ,data } = props;
    const [count, setCount] = useState(()=>{
      console.log(44444)
      return 8
    })

    const [datas, setDatas] = useState([])
    const [age, setAge] = useState(23)
    console.log('11')
    const fn =()=>{
      console.log(111111)
    }
    useEffect (()=>{
      defaultData()
    },[])

    // useEffect (()=>{
    //   get(`/aps${api.detailsThrpage}`)
    //   .then(res=>{setDatas(res.data)})
    // },[age])

    useEffect(()=>{
      document.body.addEventListener('click',fn,false)
      return ()=>{
        document.body.removeEventListener('click',fn,false)
      }
    },[count])

    const changes = () => {
      setCount(old => {
        console.log(old, 'old')
        return count + 1
      })  
    }
    const ages =() =>{
      setAge(age + 1)
    }
    console.log(age)
    return (
       <div>
        <h3> { count }----- { age } ===={JSON.stringify(data)}</h3> 
        {/* <button onClick = { changes } > 点击count </button> 
        <button onClick = { ages } > 点击age </button>  */}
        </div>
    )
}
export default connect(state=>{
  return {
    data:state.hook.datas
  }
},{
  defaultData
})(Text)