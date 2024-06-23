import React from "react";
import SpinnerLogin from "../SpinnerLogin";
import AddStorageItem from "../AddStorageItem";

const AddStoragePage = (props) => (
  <div>
    <div className="storage__back">
      <div className="storage__block">
        <div className="inner__storage">
          <div className="login__logo">
            <img src="/images/icon.png" alt="logo" />
          </div>
          <div className="storage__main">
            <h2>Select Storage Plan</h2>
            <div className="wrap__storage--elements">
              {props.state.storagePlans.map((currentPlan) => (
                <AddStorageItem
                  selectPlan={props.selectPlan}
                  plan={currentPlan}
                  loaded={props.state.loaded}
                  userDetails={props.state.userDetails}
                />
              ))}
            </div>
          </div>
          {!props.state.loaded ? undefined : props.state.userDetails
              .activeSubscription ? (
            <div className="add-storage-card__button-wrapper">
              <button
                className="storage-item__button"
                onClick={props.removeSubscription}
              >
                Remove Subscription
              </button>
            </div>
          ) : undefined}
        </div>
      </div>
    </div>

    <div
      className="modal__wrap"
      style={
        props.state.showCreditCard ? { display: "block" } : { display: "none" }
      }
    >
      <div className="inner__modal">
        <div className="password__modal">
          <div className="head__password">
            <h2>
              Subscribe -{" "}
              {"$" + parseInt(props.state.selectedDetails.amount, 10) / 100} /{" "}
              {props.state.selectedDetails.interval_count}{" "}
              {props.state.selectedDetails.interval}(s)
            </h2>
            <div className="close__modal">
              <a onClick={props.selectPlan}>
                <img src="/assets/close.svg" alt="close" />
              </a>
            </div>
          </div>
          <div className="password__content">
            <form onSubmit={props.pay}>
              <div
                className="group__password"
                style={
                  props.state.creditCardNumberError
                    ? { border: "2px solid red" }
                    : {}
                }
              >
                <input
                  value={props.state.creditCardNumber}
                  onChange={props.onChangeCreditCardNumber}
                  placeholder="Credit Card Number"
                />
              </div>
              <div
                className="group__password"
                style={
                  props.state.creditCardExpiryError
                    ? { border: "2px solid red" }
                    : {}
                }
              >
                <input
                  value={props.state.creditCardExpiry}
                  onChange={props.onChangeCreditCardExpiry}
                  placeholder="(MM/YY) Expiration Date"
                />
              </div>
              <div
                className="group__password"
                style={
                  props.state.creditCardCVCError
                    ? { border: "2px solid red" }
                    : {}
                }
              >
                <input
                  value={props.state.creditCardCVC}
                  onChange={props.onChangeCreditCardCVC}
                  placeholder="Credit Card CVC"
                />
              </div>
              <div className="password__submit">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
          <div
            style={
              props.state.paymentLoading
                ? {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "61px",
                    paddingBottom: "23px",
                  }
                : { display: "none" }
            }
          >
            <SpinnerLogin />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AddStoragePage;
