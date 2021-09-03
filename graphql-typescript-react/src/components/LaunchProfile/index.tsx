import * as React from "react";
import { useLaunchProfileQuery } from "../../generated/graphql";
import LaunchProfile from "./LaunchProfile";

interface ownProps {
  id: Number;
}

const LaunchProfileContainer: React.FC<ownProps> = ({ id }) => {
  const { data, error, loading, refetch } = useLaunchProfileQuery({
    variables: { id: String(id) },
  });

  React.useEffect(() => {
    refetch({ id: String(id) });
  }, [refetch, id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error</div>;
  }

  if (!data) {
    return <div>Seleccione un vuelo desde el panel.</div>;
  }

  return <LaunchProfile data={data} />;
};

export default LaunchProfileContainer;
