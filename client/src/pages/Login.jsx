import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import { VisuallyHiddenInput } from "../components/styles/StyledComponents.jsx";
import { useInputValidation } from "6pp";
import { usernameValidator } from "../utils/validator.js";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const name = useInputValidation("");
  const bio = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const password = useInputValidation("");

  const toggleLogin = () => setIsLogin((prev) => !prev);

  return (
    <Container component={"main"} maxWidth="xs" sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Paper elevation={3} sx={{ padding: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={() => {}}>
              <TextField required fullWidth label="Username" margin="normal" variant="outlined" value={username.value} onChange={username.changeHandler} />
              <TextField required fullWidth label="Password" type="password" margin="normal" variant="outlined" value={password.value} onChange={password.changeHandler} />
              <Button sx={{ marginTop: "1rem" }} variant="contained" color="primary" type="submit" fullWidth disabled={isLoading}>Login</Button>
              <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
              <Button disabled={isLoading} fullWidth variant="text" onClick={toggleLogin}>Sign Up Instead</Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Sign Up</Typography>
            <form style={{ width: "100%", marginTop: "1rem" }} onSubmit={() => {}}>
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar sx={{ width: "10rem", height: "10rem", objectFit: "contain" }} />
                <IconButton sx={{ position: "absolute", bottom: "0", right: "0", color: "white", bgcolor: "rgba(0,0,0,0.5)", ":hover": { bgcolor: "rgba(0,0,0,0.7)" } }} component="label">
                  <><CameraAltIcon /><VisuallyHiddenInput type="file" /></>
                </IconButton>
              </Stack>
              <TextField required fullWidth label="Name" type="text" margin="normal" variant="outlined" value={name.value} onChange={name.changeHandler} />
              <TextField required fullWidth label="Bio" type="text" margin="normal" variant="outlined" value={bio.value} onChange={bio.changeHandler} />
              <TextField required fullWidth label="Username" type="text" margin="normal" variant="outlined" value={username.value} onChange={username.changeHandler} />
              <TextField required fullWidth label="Password" type="password" margin="normal" variant="outlined" value={password.value} onChange={password.changeHandler} />
              <Button sx={{ marginTop: "1rem" }} variant="contained" color="primary" type="submit" fullWidth disabled={isLoading}>Sign Up</Button>
              <Typography textAlign={"center"} m={"1rem"}>OR</Typography>
              <Button disabled={isLoading} fullWidth variant="text" onClick={toggleLogin}>Login Instead</Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
