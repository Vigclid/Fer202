

const AgeOfPeople = () => {

    const People = [
        {
            age : 10,
            name : "Olivia"
        },
        {
            age : 11,
            name : "Xuan Son"
        },
        {
            age : 12,
            name : "Mbappe"
        },
        {
            age : 13,
            name : "Messi"
        },
        {
            age : 14,
            name : "Ronaldo"
        }
    ]


    const colorOfText = {
        color : "red"
    }

    return (
        <>
            <h1> List people </h1>
            {
                People.map((people,index) => {
                    return (
                        <div>
                            <h2 style={colorOfText}>Stt : {index+1}</h2>
                            <ul>
                                <li>The name is {people.name}</li>
                                <li>The age is {people.age}</li>
                            </ul>
                        </div>
                    )
                })
            }
        </>
    )    
}

export default AgeOfPeople;