import React,{ Component } from "react";
import Burger from "../../components/Burger/Burger";
import Auxi from '../../hoc/Auxi';
class BurgerBuilder extends Component{
    render(){
        return(
            <Auxi>
                <Burger/>
                <div>Build Controls</div>
            </Auxi>
        );
    }
}
export default BurgerBuilder;