// app/page.jsx
export default function HomePage() {
  const randomNumber = Math.floor(Math.random() * 1000);
  return (
    <div style={{ fontFamily: "sans-serif", padding: "2rem" }}>
      <h2>سلام، این صفحه اصلی ربات من است!</h2>
      <p>شماره رندوم برای تست: {randomNumber}</p>
      <p>آیا دامنه درست Build شده؟</p>
    </div>
  );
}
