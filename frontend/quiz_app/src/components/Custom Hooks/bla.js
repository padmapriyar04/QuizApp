export function fetchData () {
    try {
        fetch('http://localhost:5050/questions')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(resdata => {
                console.log('Data:', resdata);
                setAnswer(resdata[0].answers);
                setQuestion(resdata[0].questions);
                console.log(question,answer)
                //setQuestion(resdata[0].questions);
                //console.log(question)
                //setData((prev) => ({ ...prev, apiData: { question: { question }, answers: { answer } } }));
                //dispatch(FetchQandA(question,answers));
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    } catch (error) {
        console.error(error);
    }
};

const fetchAndStore = ()=>{
    console.log("array",question,answer)
    setData((prev) => ({ ...prev, apiData: { question: { question }, answers: { answer } } }));
    dispatch(FetchQandA(question,answers));
}

useEffect(() => {
    fetch_data();
}, [])

useEffect(()=>{
    fetchAndStore()
},[question,answer])
return [data, setData]



.then(response => {
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})