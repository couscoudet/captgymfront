import Table from 'react-bootstrap/Table';

function MyTable({parentData, setPartnerId, previousPageLink, nextPageLink, toPage}) {
console.log({parentData})

const toPreviousPage = () => {
  toPage(previousPageLink);
}

const toNextPage = () => {
  toPage(nextPageLink);
}


  return (
     <div>
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
            {partner.active ? <td style={{color: 'green'}}>oui</td> : <td style={{color: 'red'}}>non</td>}
            <td><i className="fa-solid fa-eye" id={partner.id} onClick={event => setPartnerId(event.currentTarget.id)}></i></td>
          </tr>
        )) : null}
        </tbody>
      </Table>
      <div className="d-flex justify-content-end me-3">
          {previousPageLink && <div className="p-2 m-1 arrow" onClick={toPreviousPage}><i class="fa-solid fa-arrow-left"></i></div>}
          {nextPageLink && <div className="p-2 m-1 arrow" onClick={toNextPage}><i class="fa-solid fa-arrow-right"></i></div>}
      </div>
    </div>
  );
}

export default MyTable;