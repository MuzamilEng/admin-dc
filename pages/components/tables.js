// import node module libraries
import { Fragment } from 'react';
import { Col, Row, Card, Table, Nav, Tab, Container } from 'react-bootstrap';

// import widget/custom components
import { HighlightCode }  from 'widgets';

// import react code data file
import {
	BasicTableCode,
	DarkTableCode,
	TableHeadCode,
	StripedTableCode,
	TableVariantCode,
	BorderedTableCode,
	BorderlessTableCode,
	HoverableRowsCode,
	SmallTableCode,
	ContextualClassesCode,
	ResponsiveTableCode
} from 'data/code/TablesCode';

const Tables = () => {
	return (
		<Container fluid className="p-6">
			

			{/* responsive-tables */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="responsive-tables" className="mb-4">
						<h2>Meter</h2>
						
					</div>
					<Tab.Container defaultActiveKey="design">
						<Card>
							<Card.Header className="border-bottom-0 p-0">
								<Nav className="nav-lb-tab">
									<Nav.Item>
										<Nav.Link eventKey="design" className="mb-sm-3 mb-md-0">
											Pre Paid
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="react" className="mb-sm-3 mb-md-0">
											Post Paid
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</Card.Header>
							<Card.Body className="p-0">
								<Tab.Content>
									<Tab.Pane eventKey="design" className="pb-4 p-4">
										{/* code started */}
										<Table responsive className="text-nowrap">
											<thead>
												<tr>
													<th scope="col">#</th>
													<th scope="col">Customer Name</th>
													<th scope="col">Date</th>
													<th scope="col">Meter Type</th>
													<th scope="col">Meter Number</th>
													<th scope="col">Amount</th>
													<th scope="col">Total Amount</th>
													<th scope="col">Commission</th>
													<th scope="col">Token</th>
													<th scope="col">Unit</th>
													<th scope="col">Payment Method</th>
													<th scope="col">Address</th>
													<th scope="col">Main Token Unit</th>
													<th scope="col">Main Token Amount</th>
													<th scope="col">Main Token Tax</th>
													<th scope="col">BSST Token</th>
													<th scope="col">BSST Token Description</th>
													<th scope="col">BSST Token Units</th>
													<th scope="col">BSST Token Amount</th>
													<th scope="col">Tariff Index</th>
													<th scope="col">Manage</th>
												

												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row">1</th>
													<td>Paul Silas</td>
													<td>18th April, 2024, 09:07PM</td>
													<td>EKEDC (Prepaid)</td>
													<td>45700663706</td>
													<td>N2,000</td>
													<td>N2,100</td>
													<td>N100</td>
													<td>28035755742154313189</td>
													<td>152.5 kWh</td>
													<td>Bank Transfer</td>
													<td>18 SIMEON street</td>
													<td>152.5 kWh</td>
													<td>N 9302.33</td>
													<td>N 697.67</td>
													<td>Not Given</td>
													<td>Not Given</td>
													<td>Not Given</td>
													<td>Not Given</td>
													<td>02</td>
													<td>Reprint Button</td>
												
												</tr>
												
											</tbody>
										</Table>
										{/* end of code */}
									</Tab.Pane>
									<Tab.Pane eventKey="react" className="pb-4 p-4 react-code">
										<HighlightCode code={ResponsiveTableCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of responsive-tables */}
		</Container>
	);
};

export default Tables;
