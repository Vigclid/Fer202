

const FilterRetail = ({company}) => {
    return (
        <>
            <table border = "2" style={{borderCollapse: "collapse"}}>
                <tr>
                    <td style={{width : "200px"} }><b>Name</b></td>
                    <td><b>Start</b></td>
                    <td><b>End</b></td>
                </tr>
            {company.filter((c) => {
                return c.category === "Retail"
            }).map((c) => {
                return (
                    <tr >
                        <td style={{width : "200px"}}>{c.name}</td>
                        <td>{c.start + 1 }</td>
                        <td>{c.end}</td>
                    </tr>
                )
            })
            }
            </table>
        </>
    )
}



export default FilterRetail;