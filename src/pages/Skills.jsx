import ProgressBar from 'react-bootstrap/ProgressBar';
import { SectionHeading } from '../components/SectionHeading';

export function Skills({ hidden }) {
  if (hidden) return <div />;
  const skillsList = [
    { label: 'HTML', progress: 70, color: 'orange' },
    { label: 'React', progress: 80, color: 'blue' },
    { label: 'CSS', progress: 50, color: 'blue' },
    { label: 'NodeJS', progress: 90, color: 'green' },
    { label: 'JS', progress: 80, color: 'yellow' },
    { label: 'Docker', progress: 80, color: 'blue' },
  ];
  return (
    <div className="container-fluid py-5" id="skill">
      <div className="container">
        <SectionHeading bgText="Навыки" title="Мои навыки" />
        <div className="row align-items-center">
          {skillsList.map((s) => (
            <div key={`${s.label}-${Math.random * 10220}`} className="col-md-6">
              <div className="skill mb-4">
                <div className="d-flex justify-content-between">
                  <h6 className="font-weight-bold">{s.label}</h6>
                  <h6 className="font-weight-bold">{s.progress}%</h6>
                </div>
                <ProgressBar now={s.progress} variant={s.color} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
