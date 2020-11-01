let count = 0;
let quiz = [
  {
    question: "Cho một đa giác đều (H) có 15 đỉnh. Người ta lập một tứ giác có 4 đỉnh là 4 đỉnh của (H). Tính số tứ giác được lập thành mà không có cạnh nào là cạnh của (H).",
    select_answer: [
      "4950",
      "1800",
      "30",
      "450"
    ],
    answer_true: "450"
  },
  {
    question: "Cho đa giác đều n cạnh (n ≥ 4). Tìm n để đa giác có số đường chéo bằng số cạnh?",
    select_answer: [
      "n = 5",
      "n = 16",
      "n = 6",
      "n = 8"
    ],
    answer_true: "n = 5"
  },
  {
    question: "1 + 0 = ?",
    select_answer: [
      "0",
      "1",
      "2",
      "4"
    ],
    answer_true: "1"
  }
];

class App extends React.Component {
  count = 0;
  checkQuiz = (e) => {
    console.log("chon: " + e);
    if(e == quiz[this.props.id].answer_true) {
      this.count++;
      ReactDOM.render(<div class="correct"> <i class="far fa-check-circle"></i> Correct  </div>, document.getElementById('modal'));
    } else {
      this.count = 0;
      ReactDOM.render(<div class="wrong"> <i class="far fa-times-circle"></i> Wrong  </div>, document.getElementById('modal'));
    }
    setTimeout(function() {
      ReactDOM.render(<div> </div>, document.getElementById('modal'));
      ReactDOM.render(<App id={Math.floor(Math.random()*quiz.length)}/>, document.getElementById('app'));

    },3000);
    
  }
  change = (e) => {
    if (e == 0) return "A";
    if (e == 1) return "B";
    if (e == 2) return "C";
    if (e == 3) return "D";
  }
  render() {
    const listBtn = quiz[this.props.id].select_answer.map((answer, index) => 
      <div onClick={() => this.checkQuiz(answer)}><span> {this.change(index)}: </span>  {answer} </div>
    );
    return (
      <div className="quiz">
        <div id="modal"> </div>
        <div className="question">
          {quiz[this.props.id].question}
        </div>
        <div className="answer">
          {listBtn}
        </div>
        <div className="count"> <h2> Count: { this.count } </h2></div>
      </div>
    );
  }
}

ReactDOM.render(<App id={Math.floor(Math.random()*quiz.length)}/>, document.getElementById('app'));