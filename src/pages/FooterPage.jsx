import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

const FooterPage = () => {
  return (
    <Box className="footer" component="footer" sx={{ py: 1, px: 2, mt: "auto", backgroundColor: "#2A1E16", left: 0, bottom: 0, position: "fixed", width: "100%" }}>
      <Container maxWidth="sm">
        <div>
          <Typography variant="h6" color="white" fontFamily={"revert"}>
            SÍGUENOS EN REDES SOCIALES
          </Typography>
        </div>

        <div className="flex mt-2 justify-between">
          <a className="cursor-pointer w-10 h-10" style={{ backgroundColor: "white", borderRadius: 100, padding: 5 }}>
            <img src="/images/facebook.png" />
          </a>

          <a className="cursor-pointer w-10 h-10" style={{ backgroundColor: "white", borderRadius: 100, padding: 5 }}>
            <img src="/images/instagram.png" width={50} />
          </a>
          <a className="cursor-pointer w-10 h-10" style={{ backgroundColor: "white", borderRadius: 100, padding: 5 }}>
            <img src="/images/tik-tok.png" width={50} />
          </a>
        </div>
      </Container>
    </Box>
  );
};

export default FooterPage;
