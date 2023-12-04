export default function TestimonialCard(props) {
  return (
    <article className="testimonial-card">
      <img className="profile" src={props.profileImg} alt="Customer Pic" />
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </article>
  );
}
