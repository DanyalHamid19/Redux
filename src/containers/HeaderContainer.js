import { connect } from "react-redux";
import Header from "../components/header";

const mapStateToProps = (state) => ({
  data: state.cartItem.cartData,
});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
