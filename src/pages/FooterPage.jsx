import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Button, Popover } from "@mui/material";

const FooterPage = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <Box className="footer" component="footer" sx={{ py: 1, px: 2, mt: "auto", backgroundColor: "#2A1E16", left: 0, bottom: 0, position: "relative", width: "100%" }}>
      <Container maxWidth="sm">
        <div>
          <Typography variant="h6" color="white" fontFamily={"revert"}>
            SÍGUENOS EN REDES SOCIALES
          </Typography>
        </div>

        <div className="flex mt-2 justify-between">
          <a
            className="cursor-pointer w-10 h-10"
            style={{ backgroundColor: "white", borderRadius: 100, padding: 5 }}
            href="https://www.facebook.com/profile.php?id=100067026591787&mibextid=LQQJ4d"
            target="_blank"
          >
            <img src="/images/facebook.png" />
          </a>
          <a className="cursor-pointer w-10 h-10" style={{ backgroundColor: "white", borderRadius: 100, padding: 5 }} href="https://www.instagram.com/almatoche?igsh=d2RpNmd4bnJhbmRx" target="_blank">
            <img src="/images/instagram.png" width={50} />
          </a>
          <a className="cursor-pointer w-10 h-10" style={{ backgroundColor: "white", borderRadius: 100, padding: 5 }} href="https://www.tiktok.com/@almatoche?_t=8kdIBIAVbsr&_r=1" target="_blank">
            <img src="/images/tik-tok.png" width={50} />
          </a>
          <button id={id} className="cursor-pointer w-10 h-10" onClick={handleClick} style={{ backgroundColor: "white", borderRadius: 100, padding: 5 }}>
            <img src="/images/whatsapp.png" width={50} />
          </button>
          <Popover
            className="popoverF"
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            sx={{ overflowY: "hidden" }}
          >
            <div>
              <Button
                size="medium"
                style={{
                  borderRadius: 100,
                  padding: 5,
                  border: "solid",
                  borderColor: "whitesmoke",
                  marginBottom: "5px",
                  fontFamily: "'Poppins', sans-serif",
                  textTransform: "none",
                  color: "white",
                  fontWeight: 500,
                }}
                className="cursor-pointer w-full border-yellow-500 border-r-[1px] border-t-[1px] border-l-[1px]  border-b-[6px]"
                href="https://api.whatsapp.com/send/?phone=%2B573102611139&text&type=phone_number&app_absent=0"
                target="_blank"
              >
                Cúcuta
              </Button>
            </div>
            <Button
              className="cursor-pointer "
              style={{ borderRadius: 100, padding: 5, border: "solid", borderColor: "whitesmoke", fontFamily: "'Poppins', sans-serif", textTransform: "none", color: "white", fontWeight: 500 }}
              href="https://api.whatsapp.com/send/?phone=%2B573207446550&text&type=phone_number&app_absent=0"
              target="_blank"
            >
              Villavicencio
            </Button>
          </Popover>
        </div>
      </Container>
    </Box>
  );
};

export default FooterPage;
