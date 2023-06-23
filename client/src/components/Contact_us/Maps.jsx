
export default function Maps() {


  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "70vh", width: "100%" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1265.0217433915382!2d-0.07414573174327142!3d51.508949796700215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760349ec0bab21%3A0x23ce5e82e3714e12!2s1%20Royal%20Mint%20Ct%2C%20London%2C%20UK!5e0!3m2!1sen!2sin!4v1687350030634!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{"border":0}}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
