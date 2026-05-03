export default function Rule({ kind = 'thin' }) {
  if (kind === 'double') return <div className="rule-double" />;
  if (kind === 'fancy')
    return (
      <div className="rule-fancy" aria-hidden="true">
        <span />
        <span className="orn">❦</span>
        <span />
      </div>
    );
  return <div className="rule-thin" />;
}
