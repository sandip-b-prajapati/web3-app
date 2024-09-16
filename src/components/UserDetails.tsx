import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Stack } from "@mui/material";

type PropsType = {
  address: string;
  chainName: string;
  nativeBalance: number;
  tokenBalance: number;
  tokenName: string;
  tokenSymbol: string;
  tokenDecimals: number;
  openModal: () => void;
  showTxPage: () => void;
};

const UserDetails = ({
  address,
  chainName,
  nativeBalance,
  tokenBalance,
  tokenName,
  tokenSymbol,
  tokenDecimals,
  openModal,
  showTxPage,
}: PropsType) => {
  return (
    <div className="container">
      <Card>
        <CardContent>
          <Typography
            gutterBottom
            fontWeight="bold"
            variant="body1"
            component="div"
          >
            Address:
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            {address}
          </Typography>
          <Typography
            gutterBottom
            fontWeight="bold"
            variant="body1"
            component="div"
          >
            Chain Info:
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Chain: {chainName}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Native Balance: {nativeBalance}
          </Typography>
          <Typography
            gutterBottom
            fontWeight="bold"
            variant="body1"
            component="div"
          >
            Token Info:
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Token Name: {tokenName}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Symbol: {tokenSymbol}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Token Balance: {tokenBalance}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            Decimals: {tokenDecimals}
          </Typography>
          <Stack direction="row" spacing={2}>
            {" "}
            <Button
              variant="contained"
              onClick={openModal}
              endIcon={<SendIcon />}
            >
              Send ERC20
            </Button>{" "}
            <Button variant="contained" onClick={showTxPage}>
              Show ERC20 Transfer
            </Button>{" "}
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserDetails;
