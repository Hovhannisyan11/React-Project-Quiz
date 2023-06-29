import { useState } from 'react';
import './index.scss';
import { List } from 'react-content-loader';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'часть приложения или страницы', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Это тот же HTML, но с возможностью выполнять JS-код',
    ],
    correct: 2,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
      <button onClick={()=>window.location.reload()}> Попробовать снова</button>
    </div>
  );
}

function Game({step,question,onClickVariant}) {
const percentage = Math.round((step / question.variants.length) * 100) 
  

console.log(percentage);


  return (
    <>
      <div className="progress">
        <div style={{ width: `${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
         {
          question.variants.map((quest,i)=>{
            return <li onClick={()=>onClickVariant(i)} key={i}>{quest}</li>
          })
         }
      </ul>
    </>
  );
}

function App() {
  const [correct,setCorrect] = useState(0)
  const [ step,setStep]= useState(0);
  const question = questions[step];
  




  const onClickVariant = (index)=>{
   
    // console.log(step,index);
    if(index === question.correct){
      setCorrect(correct+1)
    }

    setStep(step + 1);
    
  
  

  };

  


  return (
    <div className="App">
{
    step !== questions.length ?
      <Game step={step} question={question} onClickVariant={onClickVariant} />
      :
       <Result correct={correct} /> 


}
    </div>
  );
};

export default App;
