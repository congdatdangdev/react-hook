import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
const useFetch = (url, isCovidData) => {
  const [data, setdata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const ourRequest = axios.CancelToken.source(); // <-- 1st step

    async function fetchData() {
      try {
        let res = await axios.get(url, {
          cancelToken: ourRequest.token, // <-- 2nd step
        });

        let data = res && res.data ? res.data : [];
        if (data && data.length > 0 && isCovidData === true) {
          data.map((item) => {
            item.Date = moment(item.Date).format("DD/MM/YYYY");
            return item;
          });
          data = data.reverse(); //đảo ngươc thứ tự mảng
        }
        // data = data.reverse();
        setdata(data);
        setIsLoading(false);
        setIsError(false);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log(
            "Previous request canceled, new request is send",
            err.message
          );
        } else {
          setIsLoading(true);
          setIsError(false);
        }
      }

      return () => {
        ourRequest.cancel("eeeeeeeeeee"); // <-- 3rd step
      };
    }
    setTimeout(() => {
      fetchData();
    }, 3000);
  }, [url]);

  return { data, isLoading, isError };
};

export default useFetch;
