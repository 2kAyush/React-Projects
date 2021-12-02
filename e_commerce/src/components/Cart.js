import React from "react";
import ReactDOM from "react-dom";
import DisplayCart from "./DisplayCart";

export default function Cart({ isShowing, hide }) {
  return isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <div className="modal">
              <div className="modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <DisplayCart />
            </div>
          </div>
        </>,
        document.body
      )
    : null;
}
