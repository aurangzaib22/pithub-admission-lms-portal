import React from "react";
import {
  Button,
  Grid,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";

const Academics = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography>
          <b>Previous Education</b>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          label="Degree Level"
          size="small"
          variant="outlined"
          fullWidth
          select
          required
        >
          <MenuItem value="">Select</MenuItem>
          <MenuItem value="Matric / SSC / O-Level">
            Matric / SSC / O-Level
          </MenuItem>
          <MenuItem value="Intermediate / HSSC / A=Level">
            Intermediate / HSSC / A=Level
          </MenuItem>
          <MenuItem value="Bachelor">Bachelor</MenuItem>
          <MenuItem value="Masters">Masters</MenuItem>
          <MenuItem value="Post Graduate">Post Graduate</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          label="Degree / Certificate Title"
          size="small"
          variant="outlined"
          fullWidth
          select
          required
        >
          <MenuItem value="">Select</MenuItem>
          <MenuItem value="Matric">Matric</MenuItem>
          <MenuItem value="O-Level">O-Level</MenuItem>
          <MenuItem value="Diploma">Diploma</MenuItem>
          {/* // ? Intermediate */}
          <MenuItem value="F.A.">F.A.</MenuItem>
          <MenuItem value="F.Sc.">F.Sc.</MenuItem>
          <MenuItem value="A-Level">A-Level</MenuItem>
          <MenuItem value="ICS">ICS</MenuItem>
          <MenuItem value="I.Com">I.Com</MenuItem>
          <MenuItem value="GSC">GSC</MenuItem>
          <MenuItem value="DAE">DAE</MenuItem>
          <MenuItem value="Nursing">Nursing</MenuItem>
          {/* // ?  Bachelores */}
          <MenuItem value="14 Years (B.A. / B.Sc.)">
            14 Years (B.A. / B.Sc.)
          </MenuItem>
          <MenuItem value="16 Years (BBA / BS)">16 Years (BBA / BS)</MenuItem>
          <MenuItem value="17 Years (MBBS / BA-LLB)">
            17 Years (MBBS / BA-LLB)
          </MenuItem>
          {/* // ? Masters */}
          <MenuItem value="16 Years (M.A. / M.Sc. / LLB)">
            16 Years (M.A. / M.Sc. / LLB)
          </MenuItem>
          <MenuItem value="18 Years (MS / M.Phil.)">
            18 Years (MS / M.Phil.)
          </MenuItem>
          {/* // ? Post Graduate */}
          <MenuItem value="Ph.D.">Ph.D.</MenuItem>
        </TextField>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          label="Reg. / Roll #"
          size="small"
          variant="outlined"
          fullWidth
          required
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          label="Year"
          size="small"
          variant="outlined"
          fullWidth
          required
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          label="Obtained Marks / CGPA"
          size="small"
          variant="outlined"
          fullWidth
          required
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          label="Total Marks / CGPA"
          size="small"
          variant="outlined"
          fullWidth
          required
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          label="Board / University"
          size="small"
          variant="outlined"
          fullWidth
          required
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <label htmlFor="1" style={{ display: "block", marginBottom: 10 }}>
          Attachment(s){" "}
          <small>
            <strong>(PNG, JPG, PDF Only)</strong>
          </small>
          *
        </label>
        <input type="file" id="1" />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained">Add</Button>
      </Grid>

      <Grid item xs={12}>
        <TableContainer component={Paper} elevation={5}>
          <Table sx={{ width: "100%" }} size="small">
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <b>Degree Level</b>
                </TableCell>
                <TableCell align="center">
                  <b>Degree / Certificate Title</b>
                </TableCell>
                <TableCell align="center">
                  <b>Reg. / Roll #</b>
                </TableCell>
                <TableCell align="center">
                  <b>Year</b>
                </TableCell>
                <TableCell align="center">
                  <b>Obtained Marks / CGPA</b>
                </TableCell>
                <TableCell align="center">
                  <b>Total Marks / CGPA</b>
                </TableCell>
                <TableCell align="center">
                  <b>Board / University</b>
                </TableCell>
                <TableCell align="center">
                  <b>Attachement(s)</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row" align="center">
                  hi
                </TableCell>
                <TableCell align="center">hi</TableCell>
                <TableCell align="center">hi</TableCell>
                <TableCell align="center">hi</TableCell>
                <TableCell align="center">hi</TableCell>
                <TableCell align="center">hi</TableCell>
                <TableCell align="center">hi</TableCell>
                <TableCell align="center">hi</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default Academics;
