import {Container, Badge, Link, List, ListItem} from "@chakra-ui/react";
import {ExternalLinkIcon} from "@chakra-ui/icons";
import {Title, WorkImage, Meta} from "../../components/work";
import P from "../../components/paragraph"
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout>
            <Container>
                <Title>
                    Eisenhof <Badge>2021</Badge>
                </Title>
                <P>
                    Eisenhof - online store of home appliances
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://eisenhof.ru">
                            https://eisenhof.ru/ <ExternalLinkIcon mx="px" />
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>PHP, Twig, JQuery</span>
                    </ListItem>
                </List>

                <WorkImage src="/images/Eisenhof.png" alt="Eisenhof" />
            </Container>
        </Layout>
    )
}
export default Work