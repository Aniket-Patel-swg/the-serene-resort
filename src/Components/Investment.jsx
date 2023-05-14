import React from "react";
import "../assets/CSS/Investment.css";

const Investment = () => {
  return (
    <>
      <div className="investment-section">
        <div className="investment-detail-section">
          <h1>Up to 25% Annual Return</h1>
          <p>
            Investing in a self-sustaining upswing offers long-term potential
            gains in the UK market, but requires thorough research,
            diversification, and advice from a financial advisor.
          </p>
          <div className="investment-benefits-list">
            <ul>
              <li>
                <h4>Buy your plot of land and build a house.</h4>
                <p>
                  With projected annual returns of 15-25%, buying a plot of land
                  in the Asia-Pacific region has never been easier. You have the
                  option to build a studio or villa on the land in the future.
                </p>
              </li>
              <li>
                <h4>You can live there or rent it.</h4>
                <p>
                  Our properties offer flexibility for living or renting for
                  passive income. We seek tenants and distribute profits among
                  owners, ensuring steady income. Our rental management services
                  provide peace of mind while your investment works for you.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="investment-card">
          <ul>
            <li>
                <img src="https://www.ecobeachcity.com/wp-content/uploads/2022/09/fontisto_island-1.svg" alt="" />
              <p>
                Secure your own plot of land with a concession that lasts for 80
                years (until 2102) AND is extendable. The earlier you invest,
                the better your price will be, as prices will increase as we
                approach the opening date.
              </p>
            </li>
            <li>
                <img src="https://www.ecobeachcity.com/wp-content/uploads/2022/09/clipboard-document-list.svg" alt="" />
              <p>
                After making the reservation and signing the contract, the plot
                of land is paid for.
              </p>
            </li>
            <li>
                <img src="https://www.ecobeachcity.com/wp-content/uploads/2022/09/envelope.svg" alt="" />
              <p>
                We guarantee your rights by an official contract, which is sent
                to you by mail from: info@ecobeachcity.com
              </p>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Investment;
