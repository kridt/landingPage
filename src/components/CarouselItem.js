import "./CarouselItem.scss"

export default function CarouselItem({ image, copy, ctaLink, ctaCopy}) {

    return(
        
                <div className="carouselItem">
                    <img className="carouselItem__image" src={image} />
                    <div className="carouselItem__content">
                        <p className="carouselItem__copy">{copy}</p>
                        <a href={ctaLink} className="carouselItem__CTA">{ctaCopy}</a>
                    </div>
                </div>  
            
    )
}