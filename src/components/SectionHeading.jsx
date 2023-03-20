export function SectionHeading({ bgText, title }) {
  return (
    <div className="position-relative d-flex align-items-center justify-content-center">
      <h1
        className="display-1 text-uppercase text-white"
        style={{ WebkitTextStroke: '0.5px #dee2e6', userSelect: 'none' }}
      >
        {bgText}
      </h1>
      <h1 className="position-absolute text-uppercase text-primary">{title}</h1>
    </div>
  );
}
