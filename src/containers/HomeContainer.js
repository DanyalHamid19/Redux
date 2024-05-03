import { connect } from "react-redux";
import Home from "../components/Home";
import { addToCart,removeToCart } from "../Service/Actions/action";

const mapStateToProps = (state) => ({
  data: state.cartItem.cartData,
});

const mapDispatchToProps = (dispatch) => ({
  addtocartHandler: (data) => dispatch(addToCart(data)),
  removetocartHandler: (data) => dispatch(removeToCart(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
