import {
  Box,
  Button,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

type PropsType = {
  modalOpen: boolean;
  closeModal: () => any;
  onAddress: (value: string) => any;
  onAmount: (value: number) => any;
  onTx: () => any;
};

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "20em",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 2.5,
  p: 4,
};

const TxModal = ({
  modalOpen,
  closeModal,
  onAddress,
  onAmount,
  onTx,
}: PropsType) => {
  return (
    <>
      <Modal
        open={modalOpen}
        onClose={closeModal}
        aria-labelledby="tx-modal"
        aria-describedby="token-tx-modal"
      >
        <Box sx={style}>
          <Typography
            id="tx-modal-typography"
            variant="h6"
            component="h2"
            marginBlockEnd={2}
          >
            ERC20 Tx Modal
          </Typography>
          <Stack margin={1}>
            <TextField
              id="address"
              label="Address"
              variant="outlined"
              onChange={(e) => onAddress(e.target.value)}
            />
          </Stack>
          <Stack margin={1}>
            <TextField
              id="amount"
              label="Amount"
              variant="outlined"
              type="number"
              onChange={(e) => onAmount(Number(e.target.value))}
            />
          </Stack>
          <Stack margin={1}>
            <Button onClick={onTx} variant="outlined" color="success">
              Submit
            </Button>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default TxModal;
