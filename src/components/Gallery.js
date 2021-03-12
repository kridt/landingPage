import "./CarouselItem.scss";
import Carousel from "react-grid-carousel";
import CarouselItem from "./CarouselItem";

export default function Gallery() {
    
    return(
        <Carousel 
        cols={1} 
        rows={1} 
        gap={0}
        autoplay={3000} 
        loop> 

            <Carousel.Item>
                <CarouselItem 
                image="https://picsum.photos/1920/1080?random=1"
                copy="Vær med fra starten"
                ctaLink="/founders"
                ctaCopy="Klik her, hvis du vil være med de fede"
                />
            </Carousel.Item>
            <Carousel.Item>
                <CarouselItem 
                image="https://picsum.photos/1920/1080?random=2"
                copy="Vær med hvis du vil blive klogere"
                ctaLink="/klog"
                ctaCopy="Klik her, hvis du vil være klogere"
                />
            </Carousel.Item>
            <Carousel.Item>
                <CarouselItem 
                image="https://picsum.photos/1920/1080?random=3"
                copy="Smut ud igen tak"
                ctaLink="/smut"
                ctaCopy="Klik her, for at gå ud igen"
                />
            </Carousel.Item>
            
        </Carousel>
    )
    
}