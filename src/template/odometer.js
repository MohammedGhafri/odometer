import React from 'react';
import '../css/odometer.css'


class Odometer extends React.Component{
    constructor(){
        super()
        this.state = {
            counter : 0,
            mockCounter : '0000',
        }

    }
    showOdo(inc){
        // let newCounter;
        // let newMockCounter=String(this.state.counter+=inc).padStart(4,'0');
        // console.log(newMockCounter,this.state.counter+=inc)
        // // newCounter=parseInt(newCounter.padStart(4,'0'));
        
        
        // console.log("before",this.state.counter)
        
        this.setState({
            counter:this.state.counter+=inc,
            mockCounter:String(this.state.counter).padStart(4,'0')


        });
        // console.log("After",this.state.counter)
       

        let reset=0
        if (this.state.counter<10000) {
            return 
            console.log("Exceeded")
            this.setState({
                // console.log(this),
                counter : reset
            });
            console.log("**************")

        };
       

        this.setState({
            // counter : this.state.counter-10000,
            counter:this.state.counter-=10000,
           
            mockCounter:String(this.state.counter).padStart(4,'0')
        })
        



    }
    // pad(){
    //     // const str1 = '5';

    // return this.state.counter.padStart(4, '0'));
    // }
    bottons(){
        return(
            <>
            <button onClick={()=>this.showOdo(1)}>Increase 1</button>
            <button onClick={()=>this.showOdo(10)}>Increase 10</button>
            <button onClick={()=>this.showOdo(100)}>Increase 100</button>
            <button onClick={()=>this.showOdo(1000)}>Increase 1000</button>

            </>

        );
    }

    render(){
        const str1 = '5';

        console.log(str1.padStart(4, '0'));
        
        return(
        <>
        <h1>Odometer</h1>
        <p className="counter">{this.state.mockCounter}</p>
        
        <section>{this.bottons()}</section>
        </>
        );

    }
}


// function Odometer(props){
//     return(
//         <h1>Ghafri</h1>
//     );
// }


export default Odometer;
