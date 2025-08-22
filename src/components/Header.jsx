import headerImage from "../assets/photos/troll_face.png";

export default function Header() {
  return (
    <header>
      <img src={headerImage} alt="Troll Face" />
      <h1>Meme Buzz</h1>
    </header>
  );
}
