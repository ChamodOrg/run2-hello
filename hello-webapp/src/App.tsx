import { Box, Typography } from "@wso2/oxygen-ui";

const GREETING = "Hello, World!";

export default function App() {
  return (
    <Box
      component="main"
      sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", p: 2 }}
    >
      <Typography variant="h1" component="h1">
        {GREETING}
      </Typography>
    </Box>
  );
}
