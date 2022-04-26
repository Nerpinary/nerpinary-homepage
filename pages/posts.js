import {Container, Heading} from "@chakra-ui/react";
import Layout from "../components/layouts/article";

const Posts = () => (
    <Layout title="Posts">
        <Container>
            <Heading as="h4" fontSize={20} mb={4}>
                Popular posts
            </Heading>
        </Container>
    </Layout>
)

export default Posts