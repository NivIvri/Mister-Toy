import React from 'react'
import {
    TwitterShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    WhatsappIcon
} from "react-share";


export function AppFooter() {
    return (
        <footer>
            <div className='share-btn'> 
            <FacebookShareButton
                url={'https://www.google.co.il/'}
                quote={'Keep your little one busy with some of the top toys and games on the market.'}
                className="Demo__some-network__share-button"
            >
                <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <TwitterShareButton
                url={'https://www.google.co.il/'}

                title={'Keep your little one busy with some of the top toys and games on the market.'}
            >
                <TwitterIcon size={32} round={true} />
            </TwitterShareButton	>
            <WhatsappShareButton
                url={'https://www.google.co.il/'}

                title={'Keep your little one busy with some of the top toys and games on the market.'}
            >
                <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton	>
            <LinkedinShareButton
                url={'https://www.google.co.il/'}

                title={'Keep your little one busy with some of the top toys and games on the market.'}
            >
                <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton	>
            </div>
        </footer>
    )
}
