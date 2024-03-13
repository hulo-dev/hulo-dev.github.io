import "./HeaderBanner.scss"
import Link from "next/link";
import { ArrowDown, DiagonalArrow } from "../Icons";

const HeaderBanner = ({ data }) => {
    return (
        <div className="header-banner">
            <div className="container">
                <div className="header-banner__wrap">
                    <div className="title">
                        <h1>
                            { data?.title[0].text }
                        </h1>
                        <div className="scroll-down">
                            <Link href='#' >
                                <div className="scroll-btn">
                                    scroll down 
                                    <ArrowDown />
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className="content">
                        <div className="tags">
                            { data?.tags.map((tag, key)=> (<div className="tag" key={key}> <span > {tag.text} </span> </div>)) }
                        </div>
                        <div className="header-btn">
                            <Link href={data?.link_project.url ?? ''} >
                                    <div className="btn">
                                            visit website
                                        <span className="span-svg-wrap">
                                            <DiagonalArrow />
                                            <DiagonalArrow />
                                        </span>
                                    </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderBanner;