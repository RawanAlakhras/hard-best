import React from 'react';
import HornedBeasts from './HornedBeasts';

class Main extends React.Component{
    render(){
        return(
            <div>
                <HornedBeasts title={'Rawan'} imageUrl={'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'} description={'Mother (or father) rhino with two babies'}/>
                <HornedBeasts title={'Rawan'} imageUrl={'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg'} description={'Mother (or father) rhino with two babies'}/>
            </div>
            
        )
    }
}
export default Main;