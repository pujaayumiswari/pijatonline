import {
  Box,
  Button,
  Card,
  CardBody,
  FormControl,
  Heading,
  Input,
  Stack,
} from "@chakra-ui/react";
import CardPijat from "../../components/admin/CardPijat";
import LayoutPageAd from "../../layouts/admin/LayoutPageAd";
import { usePijetUrut } from "../../hooks/customer/pijet/usePijetUrut";
import CardKangPijit from "../../components/customer/CardKangPijat";

export default function KpPijatUrut() {
  const { pijetUrutLaki, pijetUrutWanita } = usePijetUrut();
  return (
    <>
      <LayoutPageAd>
        <Stack mt={"7.5vh"} spacing={4}>
          <Card>
            <Box
              px={6}
              pt={6}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Heading size="sm">Pijat Urut</Heading>
              <FormControl w={"48%"} display={"flex"} gap={2}>
                <Input type="text" placeholder="Cari Kang Urut" />
                <Button colorScheme="teal">Search</Button>
              </FormControl>
            </Box>
            <CardBody display={"flex"} gap={5}>
              <Box w={"50%"}>
                <Heading size="sm" pb={2}>
                  Laki - Laki
                </Heading>
                {pijetUrutLaki.map((data) => (
                  <CardKangPijit
                    key={data.id}
                    id={data.id}
                    phone={data.phone}
                    image={data.image}
                    name={data.name}
                    gender={data.gender}
                    email={data.email}
                    district={data.district}
                    address={data.address}
                  />
                ))}
              </Box>
              <Box w={"50%"} ps={6}>
                <Heading size="sm" pb={2}>
                  Perempuan
                </Heading>
                {pijetUrutWanita.map((data) => (
                  <CardKangPijit
                    key={data.id}
                    id={data.id}
                    phone={data.phone}
                    image={data.image}
                    name={data.name}
                    gender={data.gender}
                    email={data.email}
                    district={data.district}
                    address={data.address}
                  />
                ))}
              </Box>
              <Box w={"50%"}>
                <Heading size="sm" pb={2}>
                  Perempuan
                </Heading>
                <CardPijat />
              </Box>
            </CardBody>
          </Card>
        </Stack>
      </LayoutPageAd>
    </>
  );
}
