const Elections = () => {
    const elections = [
        {title: "2024 General Election"},
        {title: "The Thirty-Ninth Amendment of the Constitution (The Family)"},
        {title: "The Fortieth Amendment of the Constitution (Care)"},
    ]

    return (
        <>
            <div className="flex items-center flex-col h-full w-full">
                {
                    elections.map((item, index) => (
                        <div className="" key={index}>
                            <span>hello</span>
                        </div>
                    ))
                }
            </div>
        </>
    )
}