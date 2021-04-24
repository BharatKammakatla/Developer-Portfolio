import React, { useState, useEffect, lazy, Suspense } from "react";
import "./Project.css";
import Button from "../../components/button/Button";
import Loading from "../loading/Loading";
import { socialMediaLinks } from "../../portfolio";

export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setrepo] = useState([]);

  useEffect(() => {
    const getRepoData = () => {
      fetch("/profile.json")
        .then((result) => {
          if (result.ok) {
            return result.json();
          }
          throw result;
        })
        .then((response) => {
          setrepoFunction(response.data.user.pinnedItems.edges);
        })
        .catch(function (error) {
          console.log(error);
          setrepoFunction("Error");
          console.log(
            "Because of this Error, nothing is shown in place of Projects section. Projects section not configured"
          );
        });
    };
    getRepoData();
  }, []);

  function setrepoFunction(array) {
    setrepo(array);
  }
  if (!(typeof repo === "string" || repo instanceof String)) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Projects</h1>
          <div className="repo-cards-div-main">
            {repo.map((v, i) => {
              return <GithubRepoCard repo={v} key={v.node.id} />;
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
