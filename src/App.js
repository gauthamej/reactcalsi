import React from 'react';
import './style.css';
import * as math from "mathjs";
class Calci extends React.Component{
  constructor(props){
    super(props);
    this.state={
      input:""
    };
  }


  addinput(e){
    this.setState({ input: this.state.input + e.target.value});
  }


  handleChange(event) {
    this.setState({input: event.target.value})
    
}

  handleequal=()=>{
    try{
    if (this.setState({input:math.evaluate(this.state.input)})!==isNaN){
      this.setState({input:math.evaluate(this.state.input)})
    }
    }catch(e){
      this.setState({input: "SyntaxError"})
    }
  }

  handleUserInput=(e)=>{
    
    if(e.key==="Enter"){
      const ans=math.evaluate(this.state.input)
      
      try{
        if (ans !==isNaN){
          document.getElementById("input1").value = ans;
        } 
      }
      catch(err){
        document.getElementById("input1").value = "syntexerror";
      }
      
     
    }
  }

  
  render(){
      return(
          <div className="container-fluid ">
              <div className="row mt-4">
                <div className="col-4"></div>

                <div className="col-4 ">
                  <div className="text-center head">CALCULATOR</div>
                 
                   <div className="d-flex flex-column flex-wrap-reverse bd-highlight mt-3 bg">
                      <input type="text" className="form-control font1" id="input1" onChange={this.handleChange.bind(this)}
                       onKeyPress={this.handleUserInput.bind(this)}  defaultValue={this.state.input} autoComplete="off"   />
                   </div>
                   

                   <div className="d-flex bd-highlight ">
                      <input type="button" value="clear" className="clearborder text-center font" onClick={()=> this.setState({input:"0"})}/>
                      <input type="button"  className="text-center inb1 bg font" onClick={e => this.addinput(e, "value")} value="/"/>
                  </div>

                  <div className="d-flex bd-highlight">
                      <input type="button"  className="inb text-center font" onClick={e => this.addinput(e, "value")} value="7"/>
                      <input type="button" className="inb text-center font" onClick={e => this.addinput(e, "value")} value="8"/>
                      <input type="button"  className="inb text-center font" onClick={e => this.addinput(e, "value")} value="9"/>
                      <input type="button" className="inb text-center bg font" onClick={e => this.addinput(e, "value")} value="-"/>
                  </div>

                  <div className="d-flex bd-highlight">
                      <input type="button"  className="inb text-center font" onClick={e => this.addinput(e, "value")} value="4"/>
                      <input type="button"  className="inb text-center font" onClick={e => this.addinput(e, "value")} value="5"/>
                      <input type="button"  className="inb text-center font" onClick={e => this.addinput(e, "value")} value="6"/>
                      <input type="button"  className="inb text-center bg font" onClick={e => this.addinput(e, "value")} value="+"/>
                  </div>

                  <div className="d-flex bd-highlight">
                      <input type="button"  className="inb text-center font" onClick={e => this.addinput(e, "value")} value="1"/>
                      <input type="button" className="inb text-center font"onClick={e => this.addinput(e, "value")} value="2"/>
                      <input type="button"  className="inb text-center font"onClick={e => this.addinput(e, "value")} value="3"/>
                      <button type="submit" className="inb text-center bg font"onClick={this.handleequal} value="=">=</button>
                  </div>
                  
                </div>
                <div className="col-4"></div>
              </div>
          </div>
      )
  }
};
export default Calci;