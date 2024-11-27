import React from "react"
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper, 
  Button, 
  TextField, 
  Select, 
  MenuItem, 
  InputLabel, 
  FormControl,
  Box,
  Typography
} from "@mui/material"

interface Employee {
  name: string
  totalHours: number
  pending: number
  status: string
}

export default function EmployeeTable() {
  // Sample data
  const employees: Employee[] = Array(10).fill({
    name: "Pedro Henrique Pacheco",
    totalHours: 25,
    pending: 0,
    status: "Zerado"
  })

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#9333EA', p: 3 }}>
      <Paper sx={{ maxWidth: '1000px', mx: 'auto', p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <Button variant="outlined" startIcon={<ArrowBackIcon />} size="small">
            Voltar
          </Button>
        </Box>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 2 }}>
          <TextField
            label="Funcionário"
            variant="outlined"
            size="small"
            sx={{ flexGrow: 1, maxWidth: '400px' }}
          />
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel id="periodo-label">Período</InputLabel>
            <Select
              labelId="periodo-label"
              label="Período"
              defaultValue=""
            >
              <MenuItem value="current">Atual</MenuItem>
              <MenuItem value="previous">Anterior</MenuItem>
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              label="Status"
              defaultValue=""
            >
              <MenuItem value="zerado">Zerado</MenuItem>
              <MenuItem value="pendente">Pendente</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <TableContainer component={Paper} variant="outlined">
          <Table sx={{ minWidth: 650 }} aria-label="employee table">
            <TableHead>
              <TableRow>
                <TableCell>Funcionário</TableCell>
                <TableCell align="right">Total de Horas</TableCell>
                <TableCell align="right">Pendência</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.map((employee, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {employee.name}
                  </TableCell>
                  <TableCell align="right">{employee.totalHours}</TableCell>
                  <TableCell align="right">{employee.pending}</TableCell>
                  <TableCell align="right">{employee.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  )
}

