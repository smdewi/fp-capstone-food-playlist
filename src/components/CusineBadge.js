import { Badge } from 'react-bootstrap';

export function CusineBadge() {
  return (
    <div className="d-flex flex-row">
      <Badge pill bg="info">Chinese</Badge>
      <Badge pill bg="info">Malay</Badge>
      <Badge pill bg="info">Indian</Badge>
    </div>
  );
}
