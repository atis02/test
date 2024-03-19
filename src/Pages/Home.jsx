import {
  Box,
  Button,
  Checkbox,
  Container,
  Drawer,
  IconButton,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { FilledInput } from "@mui/material";
import MuiTextField from "@mui/material/TextField";
import axios from "axios";
const Home = () => {
  const [data, setData] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  let date = new Date().toLocaleDateString("en-us", { day: "numeric" });
  let month = new Date().toLocaleDateString("en-us", { month: "2-digit" });
  let year = new Date().toLocaleDateString("en-us", { year: "numeric" });
  const dT = Number(date) + Number(month) + Number(year);

  useEffect(() => {
    const getData = async () => {
      const response = await axios
        .get("https://www.cbr-xml-daily.ru/daily_json.js")
        .then((res) => {
          setData(res.data.Valute.GBP);
          console.log(res.data.Valute.GBP);
        });
    };
    getData();
  }, []);
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const options = {
    shouldForwardProp: (prop) => prop !== "borderColor",
  };
  const outlinedSelectors = [
    "& .MuiOutlinedInput-notchedOutline",
    "&:hover .MuiOutlinedInput-notchedOutline",
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline",
  ];
  const TextField = styled(
    MuiTextField,
    options
  )(({ borderColor }) => ({
    "& label.Mui-focused": {
      color: borderColor,
    },
    [outlinedSelectors.join(",")]: {
      borderWidth: 3,
      borderColor,
    },
  }));

  return (
    <Box
      sx={{
        background: "transparent",
        objectFit: "cover",
        backgroundImage: "url('/images/Rectangle 260.png')",
        backgroundRepeat: "no-repeat",
        // opacity: "0.5",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <Stack
        sx={{
          position: "absolute",
          background: "#133457DE",
          color: "#f1f1f1",
          width: "100%",
          height: "100vh",
          opacity: "1",
        }}
      >
        <Stack sx={{ m: { lg: "40px 200px", xs: "20px 30px" } }}>
          <Navbar />
        </Stack>
        <Stack
          sx={{ m: { lg: "0 200px", xs: "0 30px" } }}
          direction="row"
          justifyContent="space-between"
        >
          <Stack>
            <Stack mt={{ lg: "150px", xs: "70px" }}>
              <Typography
                fontSize={{ lg: 65, xs: 25 }}
                fontFamily="Raleway"
                fontWeight="600"
                width={{ lg: "740px", xs: "270px" }}
                textTransform="uppercase"
              >
                Создаю условия для вашего успеха
              </Typography>
              <Typography
                fontSize={18}
                mt="30px"
                fontFamily="Raleway"
                width="740px"
                borderLeft="1px solid #fff"
                pl="15px"
                sx={{ display: { lg: "block", xs: "none" } }}
              >
                Когда ваше время и энергия лучше сфокусированы, стремление к
                новым возможностям становится реальностью, ваш успех зависит от
                ваших действий
              </Typography>
              <Typography
                fontSize={{ lg: 18, xs: 14 }}
                mt="30px"
                fontFamily="Raleway"
                width="250px"
                borderLeft="1px solid #fff"
                pl="15px"
                sx={{ display: { lg: "none", xs: "block" } }}
              >
                Bаш успех зависит от ваших действий
              </Typography>
            </Stack>
            <Stack
              direction={{ lg: "row", xs: "column" }}
              zIndex={10}
              mt="50px"
            >
              <Button
                onClick={toggleMobileMenu}
                sx={{
                  color: "#07305D",
                  background: "#fff",
                  height: { lg: "70px", xs: "50px" },
                  borderRadius: "0",
                  textTransform: "none",

                  width: { lg: 380, xs: 150 },
                  display: "flex",
                  justifyContent: "space-between",
                  p: "20px",
                  ":hover": { backgroundColor: "#fff" },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "600",
                    display: { lg: "block", xs: "none" },
                  }}
                >
                  Записаться на консультацию
                </Typography>
                <Typography sx={{ display: { lg: "none", xs: "block" } }}>
                  Записаться
                </Typography>
                <Stack
                  sx={{
                    borderLeft: "2px solid #07305D",
                    width: { lg: "50px", xs: "30px" },
                    height: { lg: "70px", xs: "50px" },
                    background: "#fff",
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "flex-end",
                    marginLeft: "10px",
                  }}
                >
                  <img
                    style={{ margin: "0 0px 10px 0" }}
                    src="/images/Vector.png"
                    alt=""
                  />
                </Stack>
              </Button>
              <Button
                sx={{
                  border: "1px solid #fff",
                  color: "#fff",
                  height: { lg: "70px", xs: "50px" },
                  borderRadius: "0",
                  textTransform: "none",
                  fontWeight: "600",
                  width: { lg: 380, xs: 150 },
                  display: "flex",
                  justifyContent: "space-between",
                  p: "20px",
                  mt: { lg: 0, xs: "20px" },
                  ml: { lg: 10, xs: 0 },
                }}
                onClick={toggleMobileMenu}
              >
                <Typography
                  sx={{
                    fontWeight: "600",
                    display: { lg: "block", xs: "none" },
                  }}
                >
                  Бесплатная консультация
                </Typography>
                <Typography sx={{ display: { lg: "none", xs: "block" } }}>
                  Заказать звонок
                </Typography>

                <Stack
                  sx={{
                    borderLeft: "2px solid #fff",
                    width: { lg: "50px", xs: "30px" },
                    height: { lg: "70px", xs: "50px" },
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "flex-end",
                    marginLeft: "10px",
                  }}
                >
                  <img
                    style={{ margin: "0 0px 10px 0" }}
                    src="/images/Vector (1).png"
                    alt=""
                  />
                </Stack>
              </Button>
            </Stack>
            <Stack direction="row">
              <Stack
                direction="column"
                pl="15px"
                borderLeft="1px solid #fff"
                mt={{ lg: "50px", xs: "120px" }}
              >
                <Typography
                  width={{ lg: "445px", xs: "85px" }}
                  fontWeight="600"
                  fontFamily="Montserrat"
                  fontSize={{ lg: 40, xs: 20 }}
                >
                  {dT}
                </Typography>
                <Typography
                  mt={{ lg: "20px", xs: "5px" }}
                  fontSize={{ lg: 16, xs: 12 }}
                  width={{ lg: "150px", xs: "120px" }}
                >
                  техник для достижения целей
                </Typography>
              </Stack>
              <Stack
                direction="column"
                pl="15px"
                borderLeft="1px solid #fff"
                mt={{ lg: "50px", xs: "120px" }}
                zIndex={10}
              >
                <Typography
                  width={{ lg: "445px", xs: "50px" }}
                  fontWeight="600"
                  fontFamily="Montserrat"
                  fontSize={{ lg: 40, xs: 20 }}
                >
                  {(data.Value * 100) / data.Previous - 100}%
                </Typography>
                <Typography
                  mt={{ lg: "20px", xs: "5px" }}
                  fontSize={{ lg: 16, xs: 12 }}
                  width={{ lg: "150px", xs: "120px" }}
                >
                  увеличение личной продуктивности
                </Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack sx={{ display: { lg: "block", xs: "none" } }}>
            <img
              style={{ height: "794px" }}
              src="/images/mentor 2.png"
              alt=""
            />
          </Stack>
          <Stack
            sx={{ display: { lg: "none", xs: "block" }, position: "absolute" }}
          >
            <img
              style={{
                marginLeft: "153px",
                marginTop: "100px",
                height: "500px",
                width: "205px",
              }}
              src="/images/M.png"
              alt=""
            />
          </Stack>
        </Stack>
        <Drawer
          anchor="left"
          open={mobileMenuOpen}
          onClose={toggleMobileMenu}
          sx={{
            "& .MuiDrawer-paper": {
              width: { lg: "600px", xs: "100%" },
              background: "#0F1D45",
              color: "#fff",
            },
          }}
        >
          <Box
            sx={{
              bg: "#0F1D45",
              height: "100%",
              color: "#000",
              padding: "16px 0",
            }}
          >
            <Stack
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "end",
                ml: { lg: "50px", xs: "0" },
                mr: "20px",
              }}
            >
              <IconButton onClick={() => setMobileMenuOpen(false)}>
                <img src="/images/X.png" alt="" />
              </IconButton>
            </Stack>
            <Stack
              direction="column"
              alignItems="start"
              justifyContent="space-between"
              spacing={2}
              ml={{ lg: "100px", xs: "65px" }}
              mt="20px"
              height="80%"
            >
              <Typography fontWeight="600" fontSize={50} color="#fff">
                Закажите обратный звонок
              </Typography>
              <Stack width="80%" spacing={6} sx={{ mt: "100px" }}>
                <TextField
                  borderColor="#fff"
                  fullWidth
                  InputLabelProps={{
                    style: { color: "#fff" },
                  }}
                  inputProps={{ style: { color: "#fff" } }}
                  id="standard-basic"
                  label="ИМЯ"
                  type="text"
                />
                <TextField
                  fullWidth
                  borderColor="#fff"
                  InputLabelProps={{
                    style: { color: "#fff" },
                  }}
                  inputProps={{ style: { color: "#fff" } }}
                  id="standard-basic"
                  label="ТЕЛЕФОН"
                  type="number"
                />
              </Stack>
              <Stack direction="row" mt="30px">
                <Checkbox sx={{ color: "#fff" }} />
                <Typography
                  fontSize={18}
                  width={{ lg: "400px", xs: "250px" }}
                  color="#fff"
                >
                  Согласен на сохранение и обработку персональных данных
                </Typography>
              </Stack>
              <Stack alignItems="center" justifyContent="center">
                <Button
                  sx={{
                    color: "#07305D",
                    background: "#fff",
                    height: "70px",
                    borderRadius: "0",
                    textTransform: "none",

                    width: { lg: 380, xs: 280 },
                    display: "flex",
                    justifyContent: "space-between",
                    p: "20px",
                    ":hover": { backgroundColor: "#fff" },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "600",
                    }}
                  >
                    Заказать обратный звонок
                  </Typography>

                  <Stack
                    sx={{
                      borderLeft: "2px solid #07305D",
                      width: { lg: "50px", xs: "30px" },
                      height: { lg: "70px", xs: "50px" },
                      background: "#fff",
                      display: "flex",
                      alignItems: "end",
                      justifyContent: "flex-end",
                      marginLeft: "10px",
                    }}
                  >
                    <img
                      style={{ margin: "0 0px 10px 0" }}
                      src="/images/Vector.png"
                      alt=""
                    />
                  </Stack>
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Drawer>
      </Stack>
    </Box>
  );
};

export default Home;
