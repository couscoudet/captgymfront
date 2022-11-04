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
          {partner.id ? <td>{partner.id}</td> : null}
          {partner.name ? <td>{partner.name}</td> : null }
          {partner.active ? <td style={{color: 'green'}}>oui</td> : <td style={{color: 'red'}}>non</td>}
          {partner.id ? <td><i className="fa-solid fa-eye" id={partner.id} onClick={event => setPartnerId(event.currentTarget.id)}></i></td> : null}
        </tr>
      )) : null}
      </tbody>
    </Table>
  );
}

export default MyTable;