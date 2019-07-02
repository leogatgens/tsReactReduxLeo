import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import {
  IPaisCompleto,
  INuevoViajeResgistrado
} from "../../../../redux/InterfaceModels";
import moment from "moment";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexWrap: "wrap"
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: 400
    },
    dense: {
      marginTop: 19
    },
    menu: {
      width: 400
    }
  })
);

interface IProps {
  allcountries: IPaisCompleto[];
  onAddItem: (CountryId: INuevoViajeResgistrado) => void;
}
interface IState {
  selectedDate: moment.Moment;
  Idpais: number;
}

export default function FormDialog(props: IProps) {
  const onChange = (name: keyof IState) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    let temp = moment(event.target.value, "YYYY-MM-DD");
    setValues({ ...values, [name]: temp });
  };

  const [open, setOpen] = React.useState(false); // hooks react

  const [values, setValues] = React.useState<IState>({
    selectedDate: moment(),
    Idpais: props.allcountries[0].idCountry
  });
  const classes = useStyles();
  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  const handleSave = () => {
    let model = {} as INuevoViajeResgistrado;
    model.IdPais = Number(values.Idpais);
    model.VisitedDate = values.selectedDate;
    debugger;
    props.onAddItem(model);
    setOpen(false);
  };

  const handleChange = (name: keyof IState) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Agregar país visitado
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Agregar país visitado</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Seleccione el país y la fecha de su visita.
          </DialogContentText>
          <form className={classes.container}>
            <TextField
              id="standard-select-country-native"
              select
              label="Seleccione el país"
              className={classes.textField}
              value={values.Idpais}
              onChange={handleChange("Idpais")}
              SelectProps={{
                native: true,
                MenuProps: {
                  className: classes.menu
                }
              }}
              helperText="Por favor selecciona tu país"
              margin="normal"
            >
              {props.allcountries.map(option => (
                <option key={option.idCountry} value={option.idCountry}>
                  {option.name}
                </option>
              ))}
            </TextField>

            <TextField
              id="date"
              label="Fecha de la visita"
              type="date"
              onChange={onChange("selectedDate")}
              defaultValue={moment().format("YYYY-MM-DD")}
              className={classes.textField}
              InputLabelProps={{
                shrink: true
              }}
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSave} color="primary">
            Guardar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
