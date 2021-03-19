import "./CarouselItem.scss"

export default function CarouselItem({ image, copy, ctaLink, ctaCopy}) {

    return(
        
                <div className="carouselItem">
                    <img alt="" className="carouselItem__image" src={image} />
                    <div className="carouselItem__content">
                        <p className="carouselItem__copy">{copy}</p>
                        <a href={ctaLink} className="carouselItem__CTA"
                        // eslint-disable-next-line 
                        onClick={gtag("event", "cta", {"content_type":ctaLink} )}
                        >{ctaCopy}</a>
                    </div>
                </div>  
            
    )
}