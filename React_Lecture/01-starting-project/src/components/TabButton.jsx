export default function TabButton({label, onSelect, isSelected}) {
  return (
    <li><button className={isSelected ? 'active' : null} onClick={onSelect}>{label}</button></li>
  );
}