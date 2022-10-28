import Table from 'react-bootstrap/Table';


function MyTable({parentData}) {
console.log({parentData})
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
      {parentData ? parentData.map(partner => (
        <tr key={partner.id}>
          <td>{partner.id}</td>
          <td>{partner.name}</td>
          <td>{partner.active ? 'oui' : 'non'}</td>
        </tr>
      )) : ''}
        
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