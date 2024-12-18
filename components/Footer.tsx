const year = new Date().getFullYear();
export default function Footer() {
  return (
    <footer className="flex items-center p-5 h-10 bg-black/90 text-white">
      Copyright {year}
    </footer>
  );
}
