import "./contact.scss"

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="video1">
        <video loop autoPlay muted className="video">
          <source src="https://res.cloudinary.com/manuelacass/video/upload/v1637738556/LATERAL_tbmvvz.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="video2">
        <video loop autoPlay muted className="video">
          <source src="https://res.cloudinary.com/manuelacass/video/upload/v1637738553/ORBITAL_h9uef8.mp4" type="video/mp4" />
        </video>
      </div>

    </div>
  )
}
