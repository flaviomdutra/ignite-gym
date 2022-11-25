import { MaterialIcons } from "@expo/vector-icons";
import { Heading, HStack, Icon, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";
import { UserPhoto } from "./UserPhoto";

export function HomeHeader() {
  return (
    <HStack bg="gray.600" pt={16} pb={5} px={8} alignItems="center">
      <UserPhoto
        source={{ uri: "https://github.com/flaviomdutra.png" }}
        size={16}
        alt="Imagem do usuário"
        mr={4}
      />
      <VStack flex={1}>
        <Text color="gray.100" fontSize="md" fontFamily="body">
          Olá,
        </Text>
        <Heading color="gray.100" fontSize="md" fontFamily="heading">
          Flávio
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon as={MaterialIcons} name="logout" size={7} color="gray.200" />
      </TouchableOpacity>
    </HStack>
  );
}
