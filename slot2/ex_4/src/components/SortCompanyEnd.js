


const SortCompanyEnd = ({company}) => {
    const Sort = company.sort((a,b) => {
        if (a.end < b.end ) return -1;
        else if (a.end === b.end) return 0; else return 1;
    })
    return (
        <>
            <ul>
            {Sort.map((c,index)=>{
                return (
                <>
                <li key = {index}>{c.name} | {c.end}</li>
                </>
                )
            })}
        </ul>
        </>
    )
}


export default SortCompanyEnd;