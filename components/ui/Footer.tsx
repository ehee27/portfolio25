const year = new Date().getFullYear();
export default function Footer() {
  return <footer className="p-5 h-10 bg-background">Copyright {year}</footer>;
}
