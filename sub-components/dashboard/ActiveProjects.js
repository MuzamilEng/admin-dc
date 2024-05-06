// import node module libraries
import Link from 'next/link';
import { ProgressBar, Col, Row, Card, Table, Image } from 'react-bootstrap';

// import required data files
import ActiveProjectsData from "data/dashboard/ActiveProjectsData";

const ActiveProjects = () => {
    return (
        <Row className="mt-6">
            <Col md={12} xs={12}>
                <Card>
                    <Card.Header className="bg-white  py-4">
                        <h4 className="mb-0">Transactions</h4>
                    </Card.Header>
                    <Table responsive className="text-nowrap mb-0">
                        <thead className="table-light">
                            <tr>
                                <th>S/N</th>
                                <th>Biller</th>
                                <th>Customer Name</th>
                                <th>Service Description</th>
                                <th>Meter Type</th>
                                <th>Meter Number</th>
                                <th>Amount</th>
                                <th>Total Amount</th>
                                <th>Commission</th>
                                <th>Transaction ID</th>
                                <th>Payment ID</th>
                                <th>Payment Channel</th>
                                <th>Wallet Balance</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ActiveProjectsData.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="align-middle">
                                            <div className="d-flex align-items-center">
                                                <div>
                                                    <div className={`icon-shape icon-md border p-4 rounded-1 ${item.brandLogoBg}`}>
                                                        <Image src={item.brandLogo} alt="" />
                                                    </div>
                                                </div>
                                                <div className="ms-3 lh-1">
                                                    <h5 className=" mb-1">
                                                        <Link href="#" className="text-inherit">{item.projectName}</Link></h5>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="align-middle">{item.hours}</td>
                                        <td className="align-middle"><span className={`badge bg-${item.priorityBadgeBg}`}>{item.priority}</span></td>
                                        <td className="align-middle">
                                            <div className="avatar-group">
                                                {item.members.map((avatar, avatarIndex) => {
                                                    return (
                                                        <span className="avatar avatar-sm" key={avatarIndex}>
                                                            <Image alt="avatar" src={avatar.image} className="rounded-circle" />
                                                        </span>
                                                    )
                                                })}
                                                <span className="avatar avatar-sm avatar-primary">
                                                    <span className="avatar-initials rounded-circle fs-6">+5</span>
                                                </span>
                                            </div>
                                        </td>
                                        <td className="align-middle">{item.hours}</td>
                                        <td className="align-middle">{item.hours}</td>
                                        <td className="align-middle">{item.hours}</td>
                                        <td className="align-middle">{item.hours}</td>
                                        <td className="align-middle">{item.hours}</td>
                                        <td className="align-middle">{item.hours}</td>
                                        <td className="align-middle">{item.hours}</td>
                                        <td className="align-middle">{item.hours}</td>
                                        <td className="align-middle">{item.hours}</td>
                                        
                                        <td className="align-middle"><span className={`badge bg-${item.priorityBadgeBg}`}>{item.priority}</span></td>
                                        {/* <td className="align-middle text-dark">
                                            <div className="float-start me-3">{item.progress}%</div>
                                            <div className="mt-2">
                                                <ProgressBar now={item.progress} style={{ height: '5px' }} />
                                            </div>
                                        </td> */}
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                  
                </Card>
            </Col>
        </Row>
    )
}

export default ActiveProjects