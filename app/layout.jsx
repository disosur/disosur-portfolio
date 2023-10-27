import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Profile from "./components/Header/Profile";
import { VStack, Container, Box } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Disosur",
  description: "A personal portfolio of Alysstair Morales for front-end development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>🦖</text></svg>"></link>
      </head>

      <body className={inter.className}>
        <Providers>
          <Box m={2}>
            <VStack>
              <Container>
                <Profile />
                {children}
              </Container>
            </VStack>
          </Box>
        </Providers>
      </body>
    </html>
  );
}
