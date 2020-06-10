import React from 'react';
import cs from 'classnames'
import _ from 'loadsh'
import './style.less'
export default class index extends React.Component {
  //#region 
  
  render() {
   const istrue1 = true,istrue2 = false
   const data = {name:{age:{abc:'ww'}}}
    return <div className='lian'>111
      <div className={cs('a0',{a1:true})}>11111</div>
      <div className={cs('b0',{b1:istrue1,b2:istrue2})}>22222</div>
      <div className={cs('c0',['c1',{c2:true,c3:false}])}>33333</div>
      <div>
        {
          _.get(data,'name.age.abc','11')
        }
      </div>
    </div>;
  }
}


