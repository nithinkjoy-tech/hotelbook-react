import React, {useState} from "react";
import "../../css/History.css";
import ReactStars from "react-rating-stars-component";
import ModalComponent from "./ModalComponent";
import {Formik, Form} from "formik";
import * as Yup from "yup";
import InputBox from "./InputBox";

const reviewSchema = Yup.object().shape({
  review: Yup.string().min(2).max(100000).required(),
  rating: Yup.number().required().oneOf([1, 2, 3, 4, 5]),
});

function History() {
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleSubmit = async (value) => {
    console.log(value,"val");
  };

  return (
    <div className="history">
      <h3>History</h3>
      <h5>Caption about History</h5>
      <div className="history_contents">
        <div className="history_Contents_Left">
          <p>Hotel Name</p>
          <p>Type</p>
        </div>
        <div>
          <button onClick={() => setIsOpen(true)} className="btn btn-primary">
            Add Review
          </button>
        </div>
        <div className="history_Content_Right">
          <p>DD/MM/YY</p>
          <p>Price</p>
        </div>
      </div>

      <div className="history_contents">
        <div className="history_Contents_Left">
          <p>Hotel Name</p>
          <p>Type</p>
        </div>
        <div className="history_Content_Right">
          <p>DD/MM/YY</p>
          <p>Price</p>
        </div>
      </div>

      <div className="history_contents">
        <div className="history_Contents_Left">
          <p>Hotel Name</p>
          <p>Type</p>
        </div>
        <div className="history_Content_Right">
          <p>DD/MM/YY</p>
          <p>Price</p>
        </div>
      </div>
      <Formik
        initialValues={{
          rating: "",
          review: "",
        }}
        validationSchema={reviewSchema}
        onSubmit={(values, {setFieldError, resetForm}) =>
          handleSubmit(values, setFieldError, resetForm)
        }
      >
        {({handleSubmit,setFieldValue}) => (
          <ModalComponent modalIsOpen={modalIsOpen} setIsOpen={setIsOpen} handleSubmit={handleSubmit}>
            <Form>
              <div className="relative w-full mb-3">
                <div style={{display:"flex"}} >
                <h2 style={{marginRight:"60px",paddingTop:"7px"}} >Review</h2>
                <ReactStars
                  count={5}
                  onChange={(rating)=>setFieldValue("rating",rating)}
                  size={35}
                  isHalf={false}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
                <div></div>
                </div>
                ,<textarea style={{width: "40rem", height: "200px"}} name="rating" onChange={(e)=>setFieldValue("review",e.target.value)} row="5" col="90"></textarea>
              </div>
            </Form>
          </ModalComponent>
        )}
      </Formik>
    </div>
  );
}

export default History;
