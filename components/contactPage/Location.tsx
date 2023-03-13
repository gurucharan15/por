import MyInfo from "../MyInfo"

export default function Location() {
  return (
    <div className="p-12">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30696112.08126717!2d64.43848300685325!3d20.088775406435456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1678685496653!5m2!1sen!2sin"
        style={{ border: 0 } as React.CSSProperties}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full h-96"
      ></iframe>
      <ul className="grid grid-cols-1 mt-10 location sm:grid-cols-2 gap-y-2">
        <MyInfo field="address" value="Vijayawada, India" />
        <MyInfo field="email" value="admin@gurucharan.dev" />
        <MyInfo field="phone" value="+91 7995162550" />
        <MyInfo field="freelance" value="Available" />
      </ul>
    </div>
  )
}
