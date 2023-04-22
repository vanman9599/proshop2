import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, ListGroup, Card} from 'react-bootstrap'

function AboutScreen() {
  return (
    <div>
        <Row>
            <Col md={12}>
                    <Card>
                    <ListGroup variant="flush">
                    <ListGroup.Item>
                    <h3>Van Jordan</h3>
                    <h4>Full Stack Engineer</h4>
                       <h4>Email: <a href="mailto:van@aspiresolutions.tech">van@aspiresolutions.tech</a></h4>  
                    
                    </ListGroup.Item>
                    
                    <ListGroup.Item>
                        <Row>
                            <Col className="text-center">
                               <h3 className="highlighted-text">About</h3> 
                            </Col>
                        </Row>
                        <Row>
                            <Col className="p-5 about"><p>Please don't get upset at the prices of my books. I'm obviously not trying to sell books, but if you do happen to order one, I'll be happy to get that to you. I really just don't have anything to sell at the moment. If you think this website is just for my portfolio, you are absolutely correct. I mostly like to work on MERN projects, but this actually has a Python/Django backend. The shopping functionality was done as a guided learning experience courtesy of Brad Traversy & Dennis Ivy. </p>
                            
                            <p>So now that you're here, let me just say I'm looking for great opportunities. If you are looking for someone who has excellent problem solving skills, please consider hiring me. I will do back-flips for you - and my coding isn't too bad. By the way, I don't hate Chinese people. Say no to Asian hate.</p>

                            
                               </Col>
                        </Row>
                    

                    
                       
                    
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <Row>
                            <Col className="text-center">
                               <h3  className="highlighted-text">Get In Touch</h3> 
                            </Col>
                        </Row>
                        <Row>
                            <Col className="p-5 about">
                               <h5>You may want to get in touch with me if:</h5> 
                                <ul>
                                    <li>
                                        You are a startup looking for a Technical Co-founder. I'm open to these types of opportunities. I'd love to hear about your idea/product.
                                    </li>
                                    <li>
                                        You are a recruiter looking to hire someone with soft-skills with the ability to pick-up hard skills quickly. 
                                    </li>
                                    <li>You need someone to work on a freelance basis to develop your web app. The size of the project is not an issue, I can develop small or large complex apps. If needed, I can put together a team rather quickly. </li>
                                </ul>

                            
                               </Col>
                        </Row>
                    

                    
                       
                    
                    </ListGroup.Item>
              

                    <ListGroup.Item>
                        <Row>
                            <Col className="text-center m-3"><h3  className="highlighted-text">Technologies I Use</h3></Col>
                        </Row>
                        <Row>
                        <Col  className="text-center">
                            <i className="icon fa-brands fa-react"></i><br/>
                            React
                        </Col>
                        <Col className="text-center">
                         <i className="icon fa-brands fa-node"></i><br/>Node
                        </Col>
                        <Col className="text-center">
                        <i className="icon fa-solid fa-database"></i><br/>Databases
                        </Col>                                  
                             
                        <Col className="text-center">
                         <i className="icon fa-brands fa-python"></i><br/>Python
                        </Col> 

                        
                        <Col className="text-center">
                        <i className="icon fa-brands fa-js"></i><br/>Javascript
                        </Col>

                        <Col className="text-center">
                        <i className="icon fa-brands fa-java"></i><br/>Java
                        </Col>   
                            
                            <Col className="text-center">
                            <i className="icon fa-brands fa-aws"></i><br />AWS
                            </Col>
                        </Row>
                             
                    </ListGroup.Item>

                    <ListGroup.Item className="p-5">
                    
                    <ul className="skills">
                       <li className="p-2"><span className="highlighted-text">Programming Languages:</span> C, PHP, Python, Javascript, Java</li>
                       <li className="p-2"><span  className="highlighted-text">Database Programming:</span> SQL, T-SQL, PL/SQL, PSQL</li>
                       <li className="p-2"><span  className="highlighted-text">Methodologies:</span> Agile, OOP, Functional Programming, Design Patterns, Microservices</li> 
                       <li className="p-2"><span  className="highlighted-text">Frontend:</span> HTML, CSS, Javascript, Bootstrap, React</li>
                       <li className="p-2"><span  className="highlighted-text">Backend:</span> Python, Django, Node, Express, RESTful APIs</li>  
                       <li className="p-2"><span  className="highlighted-text">DevOps:</span> CI/CD, Linux, Kubernetes, Docker, AWS</li> 
                       <li className="p-2"><span  className="highlighted-text"> Tools:</span> Git, Jira</li>     
                    </ul>                          
                </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        
        </Row>
      
    </div>
  )
}

export default AboutScreen
