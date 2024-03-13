

const SectionText = ({ data, maxWidth, aligment }) => {


    return (
        <div className="text">
            <div className="container">
                <div className={`title ${aligment}`}  style={{maxWidth:maxWidth + 'px'}}>
                    <h3>
                        {data?.title[0].text}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export default SectionText;