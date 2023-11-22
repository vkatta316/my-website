import React from 'react'
import { Card, Container, Col } from "react-bootstrap"

function ProjectItem({ id, title, github, description, technologies, image, deployed, color }) {
    return (
        <div className='wrapper'>
            <>

                <Card style={{ width: '100%', backgroundColor: color }} >

                    <Card.Body>
                        <Card.Title style={{ cursor: 'pointer' }} >
                            {title}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{technologies}</Card.Subtitle>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Card.Link href={github}>GitHub</Card.Link>
                    </Card.Body>
                </Card>

            </>

        </div>
    )
}

export default ProjectItem