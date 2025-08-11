// import React from 'react'

// const SendMessage = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default SendMessage

import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SendMessage = () => {
  // Chart data
  const data = {
    labels: [
      "18:00", "19:00", "20:00", "21:00", "22:00", "23:00",
      "00:00", "01:00", "02:00", "03:00", "04:00", "05:00",
    ],
    datasets: [
      {
        label: "Sent",
        data: Array(12).fill(0), // Example data
        borderColor: "#10b981",
        backgroundColor: "#10b981",
        tension: 0.4,
      },
      {
        label: "Failed",
        data: Array(12).fill(0), // Example data
        borderColor: "#ef4444",
        backgroundColor: "#ef4444",
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { labels: { color: "#fff" } },
      title: { display: false },
    },
    scales: {
      x: {
        ticks: { color: "#9ca3af" },
        grid: { color: "rgba(255,255,255,0.05)" },
      },
      y: {
        ticks: { color: "#9ca3af" },
        grid: { color: "rgba(255,255,255,0.05)" },
      },
    },
  };

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#0f172a", padding: "1rem" }}>
      <Container fluid>
        <Row>
          {/* Left Card */}
          <Col lg={6} md={12} className="mb-4">
            <Card style={{ backgroundColor: "#1e293b", borderRadius: "12px" }} className="p-3 h-100 text-light">
              <Card.Body>
                <Card.Title className="mb-4">Send Test Message</Card.Title>

                <Row className="mb-3">
                  <Col>
                    <Form.Group>
                      <Form.Label>Target Type:</Form.Label>
                      <Form.Select>
                        <option>WhatsApp Numbers</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group>
                      <Form.Label>Message Type:</Form.Label>
                      <Form.Select>
                        <option>Text Message</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3">
                  <Form.Label>WhatsApp Client:</Form.Label>
                  <Form.Select>
                    <option>Choose WhatsApp Client</option>
                  </Form.Select>
                  <Form.Text muted>
                    Select which connected WhatsApp account to use for sending the message
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Check type="checkbox" label="Schedule Message (Optional)" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Phone Number (With Country Code):</Form.Label>
                  <Form.Control placeholder="Enter phone number and press Enter" />
                  <Form.Text muted>
                    Press Enter or Tab to add each number/group as a pill
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Message:</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Hi from WhatsApp" />
                </Form.Group>

                <Button variant="primary" style={{ backgroundColor: "#3b82f6", border: "none" }} className="w-100">
                  Send
                </Button>
              </Card.Body>
            </Card>
          </Col>

          {/* Right Card */}
          <Col lg={6} md={12} className="mb-4">
            <Card style={{ backgroundColor: "#1e293b", borderRadius: "12px" }} className="p-3 h-100 text-light">
              <Card.Body>
                <Card.Title className="mb-4">Messages In Last 12 hours</Card.Title>
                <Line data={data} options={options} height={300} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SendMessage;
