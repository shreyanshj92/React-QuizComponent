import React, { Component } from "react";
import QuizQuestionButton from "./QuizQuestionButton";

class QuizQuestion extends Component {
    handleClick(buttonText) {
        if (this.props.quiz_question.answer.includes(buttonText)) {
          this.props.showNextQuestionHandler();
        }
      };
  render() {
    

    return (
      <main>
        <section>
          <p>{this.props.quiz_question.instruction_text}</p>
        </section>
        <section className="buttons">
          {this.props.quiz_question.answer_options.map(
            (answer_option, index) => {
              return (
                <ul>
                  <QuizQuestionButton
                    key={index}
                    button_text={answer_option}
                    clickHandler={this.handleClick.bind(this)}
                  ></QuizQuestionButton>
                </ul>
              );
            }
          )}
        </section>
      </main>
    );
  }
}

export default QuizQuestion;
