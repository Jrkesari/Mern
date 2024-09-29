import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Collapse, CardBody, Card } from 'reactstrap'; // Import Reactstrap components for Bootstrap
import './shipping.css';

// Sample questions data
const questions = [
  {
    question: "What are the delivery charges?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ."
  },
  {
    question: "How long will my order take to arrive?",
    answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage."
  },
  {
    question: "Do you ship internationally?",
    answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium..."
  },
  {
    question: "How do I take advantage of FREE shipping?",
    answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text..."
  },
  {
    question: "Why have I not received my product yet?",
    answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form..."
  },
  {
    question: "There are many variations of passages?",
    answer: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC..."
  }
];

class ShippingFAQ extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: Array(questions.length).fill(false) // Initialize state for each panel
    };
  }

  toggleCollapse(index) {
    this.setState((prevState) => {
      const newCollapse = [...prevState.collapse];
      newCollapse[index] = !newCollapse[index];
      return { collapse: newCollapse };
    });
  }

  render() {
    return (
      <div>
        {/* Banner */}
        <div className="banner-top">
          <div className="container">
            <h3>Shipping</h3>
            <h4>
              <a href="/">Home</a><label>/</label>Shipping
            </h4>
            <div className="clearfix"></div>
          </div>
        </div>

        {/* FAQs */}
        <div className="faq-w3">
          <div className="container">
            <div className="spec">
              <h3>Shipping</h3>
              <div className="ser-t">
                <b></b>
                <span><i></i></span>
                <b className="line"></b>
              </div>
            </div>
            <div className="panel-group" id="accordion">
              {questions.map((item, index) => (
                <div className="panel panel-default" key={index}>
                  <div className="panel-heading">
                    <h4
                      className="panel-title"
                      onClick={() => this.toggleCollapse(index)}
                    >
                      <span>{index + 1}.</span> {item.question}
                    </h4>
                  </div>
                  <Collapse isOpen={this.state.collapse[index]}>
                    <Card>
                      <CardBody>
                        <p>{item.answer}</p>
                      </CardBody>
                    </Card>
                  </Collapse>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShippingFAQ;
