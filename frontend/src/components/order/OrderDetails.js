import React, {Fragment, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// import MetaData from '../layout/MetaData'
import Loader from "../Layout/Loader";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails, clearErrors } from "../../actions/orderActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";

const OrderDetails = ({}) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  // useParams hook to access route parameters
  const { id } = useParams();

  const {
    loading,
    error,
    order = {},
  } = useSelector((state) => state.orderDetails);
  const {
    deliveryInfo,
    orderItems,
    paymentInfo,
    user,
    finalTotal,
    orderStatus,
  } = order;

  useEffect(() => {
    dispatch(getOrderDetails(id));

    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, error, id]);

  const deliveryDetails =
    deliveryInfo &&
    `${deliveryInfo.address}, ${deliveryInfo.city}, ${deliveryInfo.postalCode}, ${deliveryInfo.country}`;

  const isPaid =
    paymentInfo && paymentInfo.status === "succeeded" ? true : false;

  return (
    <Fragment>
      {/* <MetaData title={"Order Details"} /> */}

      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="row d-flex justify-content-between orderdetails">
            <div className="col-12 col-lg-8 mt-1 order-details">
              <h1 className="my-5">Order # {order._id}</h1>

              <h4 className="mb-4">Delivery Info</h4>
              <p>
                <b>Name:</b> {user && user.name}
              </p>
              <p>
                <b>Phone:</b> {deliveryInfo && deliveryInfo.phoneNo}
              </p>
              <p className="mb-4">
                <b>Address:</b>
                {deliveryDetails}
              </p>
              <p>
                <b>Amount:</b>{" "}
                <FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />
                {finalTotal}
              </p>

              <hr />

              <h4 className="my-4">
                Payment :
                <span className={isPaid ? "greenColor" : "redColor"}>
                  <b>{isPaid ? " PAID" : " NOT PAID"}</b>
                </span>
              </h4>
              <h4 className="my-4">
                Order Status :
                <span
                  className={
                    order.orderStatus &&
                    String(order.orderStatus).includes(" Delivered")
                      ? "greenColor"
                      : "redColor"
                  }
                >
                  <b>{orderStatus}</b>
                </span>
              </h4>
              <h4 className="my-4">Order Items:</h4>

              <hr />
              <div className="cart-item my-1">
                {orderItems &&
                  orderItems.map((item) => (
                    <div key={item.fooditem} className="row my-5">
                      <div className="col-4 col-lg-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          height="45"
                          width="65"
                        />
                      </div>

                      <div className="col-5 col-lg-5">
                        <Link to={`/products/${item.product}`}>
                          {item.name}
                        </Link>
                      </div>

                      <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                        <p>
                          <FontAwesomeIcon icon={faIndianRupeeSign} size="xs" />
                          {item.price}
                        </p>
                      </div>

                      <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                        <p>{item.quantity} Item(s)</p>
                      </div>
                    </div>
                  ))}
              </div>
              <hr />
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default OrderDetails;