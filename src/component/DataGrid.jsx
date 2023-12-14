import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fathername",
    headerName: "Father Name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    editable: true,
  //  deleteable: true,
  },
];

// const rows = [
//   { id: 1, lastName: "Snow", age: 35, firstName: "Jon" },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

export default function DataGriding() {
  const [edit, setedit] = React.useState(false);
  const user = useSelector((state) => state.user);
  const rows = user.map((user, index) => ({
    id: index,
    firstName: user.firstName,
    lastName: user.lastName,
    age: user.age,
    fathername: user.fathername,
  }));

  const dispatch = useDispatch();
  const handleedit = () => {
    dispatch({
      type: "Update",
      payload: { id: edit, fatherName, firstName, lastname, age },
    });
    // dispatch({ type: "EDIT", payload: action.payload });
  };
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        // onRowEditStart={() => {}}
        editMode="row"
        disableRowSelectionOnClick
        
        // rowSelection="multiple"
        // onRowSel<DataGrid
  // other props...
        // onRowEditStop={(e) => setedit(e.target.value) && handleedit()}o
        // onRowEditCommit={(e) => setedit(e.target.value) && handleedit()}
      />
    </Box>
  );
}
