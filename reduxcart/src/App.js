import { connect } from "react-redux";
import Cart from "./Cart";

function mapStateToProps(state) {
    return {
        totalCost: state.totalCost,
        productCart: state.productCart
    }
}