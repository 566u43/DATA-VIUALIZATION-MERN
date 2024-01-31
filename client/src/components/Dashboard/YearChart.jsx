import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
    Box,
    Flex,
    Heading,
    Select,
    useColorMode
} from "@chakra-ui/react";

const YearChart = ({ data }) => {
    const { colorMode } = useColorMode();
    const [selectedYear, setSelectedYear] = useState("2021"); // Set default year
    const [chartData, setChartData] = useState(null);

    useEffect(() => {
        const yearData = data.filter((entry) => entry.year === selectedYear);

        const metrics = ["intensity", "likelihood", "relevance"];
        const labels = metrics.map((metric) => metric.charAt(0).toUpperCase() + metric.slice(1));

        const dataByMetric = metrics.map((metric) =>
            yearData.map((entry) => entry[metric])
        );

        setChartData({
            labels: labels,
            datasets: dataByMetric.map((data, index) => ({
                label: labels[index],
                data: data,
                backgroundColor: `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.6)`,
            })),
        });
    }, [selectedYear, data, colorMode]);

    const handleYearChange = (event) => {
        setSelectedYear(event.target.value);
    };

    return (
        <Box p={6} shadow="md" bg={useColorMode("white", "gray.800")} m={50}>
            <Flex direction="column" margin={'auto'}>
                <Heading as={"h2"} textAlign="left" mb={4} style={{ textAlign: "left" }} >
                    Year Chart
                </Heading>
                <Select
                    value={selectedYear}
                    onChange={handleYearChange}
                    mb={4}
                    w="200px"
                    colorScheme="purple"
                >
                    <option value="2021">2017</option>
                    <option value="2022">2022</option>
                    {/* Add other year options */}
                </Select>
                <Box height="500px" width={"100%"}>
                    {chartData && <Bar data={chartData} />}
                </Box>
            </Flex>
        </Box>
    );
};

export default YearChart;

