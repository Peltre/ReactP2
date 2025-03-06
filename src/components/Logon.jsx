import { Box, Button, TextField} from "@mui/material";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

const Logon = ({ login }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const onsubmit = (e) => {
        e.preventDefault();
        if (!username || !password) {
            alert("Los campos no deben estar vacíos");
            return;
        }

        const isLogin = login({ username, password });
        if (isLogin) {
            setUsername("");
            setPassword("");
            navigate("/home")
        } else {
            alert("el login falló")
        }

    };


    return (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100vh"
        >
          <form onSubmit={onSubmit}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              p={3}
              boxShadow={3}
              borderRadius={2}
              bgcolor="background.paper"
            >
              <Typography variant="h4" gutterBottom>
                Login
              </Typography>
              <TextField
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                margin="normal"
                fullWidth
              />
              <TextField
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ mt: 2 }}
              >
                Login
              </Button>
            </Box>
          </form>
        </Box>
      );
    }

export default Logon;