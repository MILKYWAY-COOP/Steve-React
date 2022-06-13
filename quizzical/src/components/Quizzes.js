export default function Quiz(props) {
    const { question, difficulty, correctAnswer } = props
    console.log(question)
    return (
        <>
            <h1>{ question}</h1>
            <h1>{ difficulty}</h1>
            <h1>{ correctAnswer}</h1>
            <div className='answers'>
                <div className='answer'>{ }</div>
                <div className='answer'>{ }</div>
                <div className='answer'>{ }</div>
                <div className='answer'>{ }</div>
            </div>
        </>
    )
}