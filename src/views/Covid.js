import moment from "moment";
import { useEffect, useState } from "react";
import useFetch from "../customize/Fetch";

const Covid = () => {
  // const [dataCovid, setdata] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  // const [isError, setIsError] = useState(false);

  const today = moment().startOf("day").toISOString(true);
  const priorDay = moment()
    .startOf("day")
    .subtract(31, "days")
    .toISOString(true);

  const {
    data: dataCovid,
    isLoading,
    isError,
  } = useFetch(
    `https://api.covid19api.com/country/vietnam?from=${priorDay}&to=${today}`,
    true
  );

  return (
    <div>
      {console.log("check data covid >>>>>>>>>>>>", dataCovid.length)}
      {console.log("check data covid >>>>>>>>>>>>", dataCovid)},
      <h3>Covid 10 tracking in Viet Nam</h3>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Active</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          {dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item) => {
              return (
                <tr key={item.ID}>
                  <td>{item.Date}</td>
                  <td>{item.Confirmed}</td>
                  <td>{item.Active}</td>
                  <td>{item.Deaths}</td>
                </tr>
              );
            })}
          <tr></tr>
        </tbody>
      </table>
    </div>
  );
};

export default Covid;
