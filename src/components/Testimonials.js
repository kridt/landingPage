import TestimonialCard from "./TestimonialCard";
import "./Testimonials.scss";

export default function Testimonials() {

    return(
        <section className="Testimonials">
            <TestimonialCard
            image="https://picsum.photos/200?random1"
            copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, cupiditate cumque quisquam soluta deleniti recusandae optio a nisi eius facilis? Animi quasi dolorum blanditiis incidunt quis. Non itaque voluptatum id." />
            <TestimonialCard
            image="https://picsum.photos/200?random2"
            copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, cupiditate cumque quisquam soluta deleniti recusandae optio a nisi eius facilis? Animi quasi dolorum blanditiis incidunt quis. Non itaque voluptatum id." />
            <TestimonialCard
            image="https://picsum.photos/200?random3"
            copy="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, cupiditate cumque quisquam soluta deleniti recusandae optio a nisi eius facilis? Animi quasi dolorum blanditiis incidunt quis. Non itaque voluptatum id." />
        </section>
    )
}