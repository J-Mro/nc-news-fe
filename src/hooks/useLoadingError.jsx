import { useState, useEffect } from "react";
export function useLoadingError(reqFunction, options) {
  const { dependencies = [], params = [] } = options;
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function setUp() {
      setIsLoading(true);
      try {
        const newData = await reqFunction(...params);
        setData(newData);
        setError(null);
      } catch (err) {
        setError(err);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    }
    setUp();
  }, [...dependencies]);
  return [data, setData, isLoading, error];
}
