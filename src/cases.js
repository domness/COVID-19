import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import getCases from './services/get_cases';
import * as _ from 'lodash';

function Cases() {
  const [cases, setCases] = useState({});
  const componentIsMounted = useRef(true);

  useEffect(() => {
    return () => {
      componentIsMounted.current = false;
    };
  }, []);

  useEffect(() => {
    async function fetchCases() {
      try {
        const { data } = await getCases();

        if (componentIsMounted.current) {
          const grouped = _.uniq(data.ltlas.map(i => i.areaName)).sort();
          setCases({
            metadata: data.metadata,
            dailyRecords: data.dailyRecords,
            ltlas: grouped,
          });
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchCases();
  }, []);

  const items = cases.ltlas?.map((key, i) =>
    <div key={i}>
      <Link to={`/cases/${key}`}>{key}</Link>
    </div>
  );

  return (
    <div>
      <p>Last updated: { cases.metadata?.lastUpdatedAt }</p>
      <p>{ cases.metadata?.disclaimer }</p>
      <h2>Daily Cases</h2>
      <p>{ cases.dailyRecords?.dailyLabConfirmedCases }</p>
      <p>ltlas</p>
      {items}
    </div>
  );
}

export default Cases;
