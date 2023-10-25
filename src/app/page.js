'use client'
import { tasks } from "@/data";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { Button, Grid, Card, Heading, Text, Badge, Flex } from "@radix-ui/themes";

export default function Home() {
  const handleAlert = () => alert("You clicked me!");
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <Heading>Hello World!</Heading>
      <Text>This is a Radix UI App</Text>
      <Grid columns="3" gap="4">
        {tasks.map((el) => (
          <Card id={el.id} className="hover:cursor-pointer hover:opacity-80">
            <Flex justify={"between"} align={"center"}>
              <Heading size="1">{el.title}</Heading>
              <Button size={"1"}
              onClick={handleAlert}
              >Editar <Pencil1Icon /></Button>
            </Flex>
            <Flex justify="between" className="my-2">
              <Badge
                color={
                  el.priority === "hight"
                    ? "red"
                    : el.priority === "medium"
                    ? "yellow"
                    : "green"
                }
              >
                {el.priority}
              </Badge>
              <Text size="1">{el.createdAt}</Text>
            </Flex>
            <Flex>
              <Text>{el.description}</Text>
            </Flex>
            <Text size="1">Creado por: {el.author}</Text>
          </Card>
        ))}
      </Grid>
    </div>
  );
}
