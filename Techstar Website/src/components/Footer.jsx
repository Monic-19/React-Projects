import React from 'react'
import "../styles/footer.scss"

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                <h1>TechStar</h1>
                <p>@all right reserved</p>
            </div>

            <div>
                <h5>follow us</h5>
                <div>
                    <a href="youtube.com" target={"blank"}>
                        Youtube
                    </a>
                    <a href="instagaram.com" target={"blank"}>
                        Instagram
                    </a>
                    <a href="https://github.com/Monic-19" target={"blank"}>
                        Github
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
