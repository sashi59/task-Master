import React from "react";
// import "../styles/AdminScreen.css"
function AdminScreen() {
  return (
    <div>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Sl no</th>
      <th scope="col">Employee Id</th>
      <th scope="col">Full Name</th>
      <th scope="col">Email-id</th>
      <th scope="col">Department</th>
      <th scope="col">City</th>
      <th scope="col">Assigned Task</th>
      <th scope="col">Deadline</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
      <td>@twitter</td>
    </tr>
    
  </tbody>
</table>
    </div>
  );
}

export default AdminScreen;
