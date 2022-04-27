import {Container, Heading, SimpleGrid} from "@chakra-ui/react";
import Section from "../components/section";
import {WorkGridItem} from "../components/grid-item";


import thumbEisenhof from "../public/images/Eisenhof.png"
import thumbFinHelp from "../public/images/FinHelp.png"
const Works = () => {
    return (
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="eisenhof" title="Eisenhof" thumbnail={thumbEisenhof}>
                        Eisenhof - online store of home appliances
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="financeHelper" title="Finance Helper" thumbnail={thumbFinHelp}>
                        Finance Helper - convenient calculations of savings and expenses
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works