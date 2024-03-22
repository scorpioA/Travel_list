export default function Item({ x, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={x.packed}
        onChange={() => onToggleItem(x.id)}
      />
      <span style={x.packed ? { textDecoration: "line-through" } : {}}>
        {x.quantity} {x.description}
      </span>
      <button onClick={() => onDeleteItem(x.id)}>❌</button>
    </li>
  );
}
