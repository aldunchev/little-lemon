export function Contact({contactData}) {
  const {date, guests, availableTimes} = contactData;
  console.log(date, guests, availableTimes);

  return (
    <section className='py-8'>
      <div className='container max-w-screen-md'>
        <h1>Contact</h1>
        <div>Date: {date}</div>
        <div>Guests: {guests}</div>
        <div>Time: {availableTimes}</div>
      </div>
    </section>
  );
}
