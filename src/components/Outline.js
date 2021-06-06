import { useState } from "react";
import "./Outline.css";

function Outline() {
  const [readMore, setReadmore] = useState(false);

  function handleReadmore() {
    setReadmore(true);
  }

  return (
    <div className="container">
      <div className="content">
        <h1>Logic</h1>
        <h2>
          Stretch your analytic muscles with knights, knaves, logic gates, and
          more!
        </h2>
        <div>
          <p>
            The beginning of our introductory math journey is Logic. Through
            these challenging problem solving exercises, you'll construct the
            critical thinking skills that are the basis for mathematical
            reasoning.
          </p>
          <p>
            You'll use limited information to make predictions – eliminating the
            impossible to uncover the truth. This course builds up to some truly
            mind-bending challenges!
            <button className="btn-readmore" onClick={handleReadmore}>
              {!readMore && <span>Read more</span>}
            </button>
          </p>
        </div>

        <div>
          {readMore && (
            <div>
              <p>
                By the end of this course, you'll be able to spot logical
                fallacies, navigate some strategic game theory, understand
                machine logic, and use the symbolic languages of logic to
                understand fun riddles.
              </p>
              <div>
                <h3>Topics covered</h3>
                <ul>
                  <li>Binary</li>
                  <li>Truth Tables</li>
                  <li>Logic Gates</li>
                  <li>Venn and Euler Diagrams</li>
                  <li>Propositional Logic</li>
                  <li>The Square of Opposition</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="card">
        <div className="image">
          <img
            alt="course"
            src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/logic-HzWHci.png?width=254"
          />
        </div>
        <div className="stats">
          <div>
            <p>Interactive quizzes</p>
            <h3>37</h3>
          </div>
          <div>
            <p>Concepts and exercises</p>
            <h3>265+</h3>
          </div>
        </div>
        <button>Start Course</button>
      </div>
    </div>
  );
}

export default Outline;
