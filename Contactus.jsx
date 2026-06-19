const Contact = () => {
  return (
    <div className="contact">

      <h2>Contact Us</h2>

      <input
        type="text"
        placeholder="Enter Name"
      />

      <input
        type="email"
        placeholder="Enter Email"
      />

      <textarea
        placeholder="Message"
      ></textarea>

      <button>Send</button>

    </div>
  )
}

export default Contact
