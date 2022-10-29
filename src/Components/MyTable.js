import Table from 'react-bootstrap/Table';

function MyTable({parentData, setPartnerId}) {
console.log({parentData})
  return (
    <Table striped bordered hover>
      <thead>
        <tr className="bg-primary text-white">
          <th>Id</th>
          <th >Nom du partenaire</th>
          <th>Actif</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {parentData ? parentData.map(partner => (
        <tr key={partner.id}>
          <td>{partner.id}</td>
          <td>{partner.name}</td>
          <td>{partner.active ? 'oui' : 'non'}</td>
          <td><i className="fa-solid fa-eye" id={partner.id} onClick={event => setPartnerId(event.currentTarget.id)}></i></td>
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