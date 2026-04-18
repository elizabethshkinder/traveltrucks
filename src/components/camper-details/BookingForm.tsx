export default function BookingForm() {
  return (
    <section>
      <h2>Book your campervan now</h2>
      <form>
        <input type="text" placeholder="Name*" />
        <br />
        <br />
        <input type="email" placeholder="Email*" />
        <br />
        <br />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}