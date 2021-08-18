import React, { useState } from 'react';
import congrats from '../image/congrats.png'
import { Link } from 'react-router-dom';
export default function Test() {
	const questions = [
		{
			questionText: 'What is the capital of France?',
			answerOptions: [
				{ answerText: 'New York', isCorrect: false },
				{ answerText: 'London', isCorrect: false },
				{ answerText: 'Paris', isCorrect: true },
				{ answerText: 'Dublin', isCorrect: false },
			],
		},
		{
			questionText: 'Who is CEO of Tesla?',
			answerOptions: [
				{ answerText: 'Jeff Bezos', isCorrect: false },
				{ answerText: 'Elon Musk', isCorrect: true },
				{ answerText: 'Bill Gates', isCorrect: false },
				{ answerText: 'Tony Stark', isCorrect: false },
			],
		},
		{
			questionText: 'The iPhone was created by which company?',
			answerOptions: [
				{ answerText: 'Apple', isCorrect: true },
				{ answerText: 'Intel', isCorrect: false },
				{ answerText: 'Amazon', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
			],
		},
		{
			questionText: 'How many Harry Potter books are there?',
			answerOptions: [
				{ answerText: '1', isCorrect: false },
				{ answerText: '4', isCorrect: false },
				{ answerText: '6', isCorrect: false },
				{ answerText: '7', isCorrect: true },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='grid grid-cols-1 justify-items-center bg-gray-200 border-4 border-indigo-600'>
			{showScore ? (
				<div className='text-center'>
                    <img src={congrats} alt="congrats"/>
					<p>You scored {score} out of {questions.length}</p>
                    <p>Your level is { (score < 0.75*(questions.length)) ? <p>Beginner</p> : <p>Intermediate</p>}</p>
                    <Link to='/beginner' className="font-bold bg-blue-400 p-1 rounded-2xl"> Begin My Journey </Link>
				</div>
			) : (
				<>
					<div className='w-full relative'>
						<div className='text-lg'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className="mb-3">{questions[currentQuestion].questionText}</div>
					</div>
					<div className="w-full flex flex-col justify-between">
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className = "mx-auto bg-green-100 hover:bg-green-300 p-2 rounded-2xl justify-start border border-indigo-600" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}
