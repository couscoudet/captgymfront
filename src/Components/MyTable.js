import Table from 'react-bootstrap/Table';

function MyTable() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr className="bg-primary text-white">
          <th>Id</th>
          <th >Nom du partenaire</th>
          <th>Actif</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default MyTable;