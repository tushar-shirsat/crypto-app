import millify from "millify";
import Link from "next/link";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../services/cryptoapi";
import { useState, useEffect } from "react";
// import { Loader } from './Loader'

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filterdData = cryptoList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filterdData);
  }, [cryptoList, searchTerm]);
  if (isFetching) return "loading...";
  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id}>
            <Link href={`/crypto/${currency.id}`}>
              <a>
                <Card
                  title={`${currency.rank}. ${currency.name}`}
                  extra={
                    <img className="crypto-image" src={currency.iconUrl} />
                  }
                  hoverable
                >
                  <p>Price: {millify(currency?.price)}</p>
                  <p>Price: {millify(currency?.marketCap)}</p>
                  <p>Price: {millify(currency?.change)}%</p>
                </Card>
              </a>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
